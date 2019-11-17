const fs = require("fs");
const https = require("https");
const express = require("express");
const history = require("connect-history-api-fallback");
const Powerschool = require("powerschool-api");
const forceSecure = require("force-secure-express");
const cors = require("cors");

const root = `${__dirname}/dist/`;
const apiList = {};

var app = express();

app.use(cors());
app.use(forceSecure(["groundwrk.app"]));
app.get("/api/grades/", async (req, res) => {
  try {
    const url = req.header("url");
    if (!apiList[url]) {
      let tempAPI = new Powerschool(url);
      let api = await tempAPI.setup();
      apiList[url] = api;
    }
    let grades = await getGrades(
      apiList[url],
      req.header("username"),
      req.header("password")
    );
    res.status(200).send(grades);
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

app.use(history());

app.use(express.static(root));

// https
//   .createServer(
//     {
//       key: fs.readFileSync("server.key"),
//       cert: fs.readFileSync("server.cert")
//     },
app
  // )
  .listen(process.env.PORT || 3000, function() {
    console.log("Server running on port 3000");
  });

/**
 *
 * @param {import('powerschool-api')} api
 * @param {String} usr
 * @param {String} pass
 */
async function getGrades(api, usr, pass) {
  let user = await api.login(usr, pass);
  let info = await user.getStudentInfo();
  let gradeMap = {};
  let courses = [];
  let terms = [];

  for (let t of info.terms) {
    terms.push({
      title: t.title,
      abbreviatedTitle: t.abbreviatedTitle,
      startDate: t.startDate,
      endDate: t.endDate
    });
  }

  for (let grade of info.finalGrades) {
    if (!gradeMap[grade.courseID]) gradeMap[grade.courseID] = [];

    gradeMap[grade.courseID].push({
      grade: grade.grade,
      percentage: grade.percentage,
      term: grade.getReportingTerm().title
    });
  }

  for (let course of info.courses) {
    let finalGrade = course.getFinalGrade();
    let assignments = course.getAssignments();

    if (!finalGrade) continue;
    let assign = [];
    for (let a of assignments) {
      let grade = a.getScore() || {
        letterGrade: null,
        percentage: null,
        score: null,
        collected: null,
        exempt: null,
        late: null,
        missing: null
      };

      let catagory = a.getCategory() || {
        name: null
      };

      let temp = {
        weight: a.weight,
        name: a.name,
        published: a.publishScores,
        catagory: catagory.name,
        dueDate: a.dueDate,
        grade: grade.letterGrade,
        score: grade.score,
        percentage: grade.percentage
      };
      assign.push(temp);
    }
    let sortedGrades = gradeMap[course.id].sort((a, b) => {
      return a.term < b.term ? -1 : a.term > b.term ? 1 : 0;
    });
    let temp = {
      id: course.id,
      name: course.title,
      expression: course.expression,
      roomNumber: course.roomName,
      grade: sortedGrades,
      assignments: assign
    };
    courses.push(temp);
  }
  return { courses };
}
