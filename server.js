const fs = require("fs");
const https = require("https");
const express = require("express");
const history = require("connect-history-api-fallback");
const Powerschool = require("powerschool-api");
const cors = require("cors");

const root = `${__dirname}/dist/`;
const apiList = {};

var app = express();

app.use(cors());

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

  for (let grade of info.finalGrades) {
    gradeMap[grade.courseID] = {
      grade: grade.grade,
      percentage: grade.percentage
    };
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
        score: null
      };
      let temp = {
        weight: a.weight,
        name: a.name,
        dueDate: a.dueDate,
        grade: grade.letterGrade,
        score: grade.score,
        percentage: grade.percentage
      };
      assign.push(temp);
    }
    let temp = {
      id: course.id,
      name: course.title,
      expression: course.expression,
      roomNumber: course.roomName,
      grade: gradeMap[course.id].grade,
      percentage: gradeMap[course.id].percentage,
      assignments: assign
    };
    courses.push(temp);
  }
  return courses;
}
