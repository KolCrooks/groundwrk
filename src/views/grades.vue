<template>
  <div :class="{'dimmed':notLoggedIn}">
    <q-toolbar class="toolbar bg-primary text-white">
      <q-btn flat round dense to="/">
        <q-icon v-if="!inCV" name="r_menu" />
        <q-icon v-if="inCV" name="r_arrow_back" />
      </q-btn>
      <q-toolbar-title>Grades</q-toolbar-title>
      <div v-if="(gpaW != '') && (gpa != '')">
        <q-chip color="accent" text-color="white">GPAW: {{ gpaW }}</q-chip>
        <q-chip color="accent" text-color="white">GPAU: {{ gpa }}</q-chip>
      </div>
    </q-toolbar>

    <!-- Courses -->
    <div class="scroll" v-if="!inCV">
      <q-pull-to-refresh @refresh="refresh">
        <q-list bordered separator>
          <q-item
            class="courseItem"
            v-ripple
            clickable
            v-for="course in courses"
            :key="course.name"
            :to="`/${course.id}`"
          >
            <q-item-section>{{ course.name }}</q-item-section>
            <q-item-section side>
              <q-item-label caption>
                <q-item-label class="row justify-end" caption>
                  <q-avatar size="md" rounded color="accent" text-color="white">{{ course.grade }}</q-avatar>
                </q-item-label>
                <q-item-label
                  class="row justify-end"
                  caption
                >
                <div>Running Percentage: {{`${(+course.exactPercent * 100).toFixed(2)}%` }}</div>
                <div>Q1: {{`${(+course.percentage * 100).toFixed(0)}%` }}</div>
                </q-item-label>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-pull-to-refresh>
    </div>

    <!-- Assignments -->
    <div class="scroll" v-if="inCV">
      <q-pull-to-refresh @refresh="refresh">
        <q-list bordered separator>
          <q-item
            class="courseItem"
            clickable
            v-for="assignment in assignmentList"
            :key="assignment.name"
          >
            <q-item-section>
              <q-avatar
                size="md"
                rounded
                color="primary"
                text-color="white"
                v-if="!!assignment.grade"
              >{{ assignment.grade }}</q-avatar>
              {{ assignment.name }}
            </q-item-section>
            <q-item-section side>
              <div class="column">
                <q-item-label class="row justify-end" caption>
                  <q-chip
                    dense
                    color="accent"
                    text-color="white"
                    v-if="!!assignment.grade"
                  >{{ formatScore(assignment) }}</q-chip>
                </q-item-label>
                <q-item-label
                  class="row justify-end"
                  caption
                >{{ `${(+assignment.percentage * 100).toFixed(1)}%` }}</q-item-label>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-pull-to-refresh>
    </div>

    <!-- Login Popup -->
    <q-dialog v-model="notLoggedIn" seamless>
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Powerschool Login</div>
        </q-card-section>

        <q-card-section>
          <div>
            <q-form @submit="signIn" class="q-gutter-md">
              <q-input
                filled
                v-model="username"
                label="Username"
                :value="placeholder"
                hint="Enter Your Powerschool Username"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Powerschool Username']"
              />

              <q-input
                filled
                v-model="password"
                label="Password"
                type="password"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Powerschool Password']"
              />
              <div>
                <q-btn label="Sign In" type="submit" color="primary" />
              </div>
            </q-form>
          </div>
        </q-card-section>
        <q-spinner class="fixed-center" color="primary" size="5%" :thickness="10" v-if="fetching" />
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [],
      terms: [],
      fetchedGrades: false,
      notLoggedIn: true,
      fetching: false,
      username: "",
      password: "",
      gpaW: "",
      gpa: "",
      placeholder: "",
    };
  },
  computed: {
    inCV() {
      return !!this.$route.params.id;
    },
    assignmentList() {
      if (this.courses.length == 0) return [];
      let course = this.courses.find(c => c.id == this.$route.params.id);
      return course.assignments.sort((a, b) => {
        return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
      });
    }
  },
  beforeMount() {
    let creds = this.$store.getters.getLogin;
    this.password = creds.password;
    this.username = creds.username;
    if (this.password.length > 0 && this.username.length > 0) {
      this.notLoggedIn = false;
      this.courses = this.$store.getters.courseCache;
      this.gpaCalc();
      this.fetchedGrades = true;
    }
  },
  methods: {
    fetchGrades(username, password, done) {
      let host = "http://localhost:3000";
      if (window.location.hostname == "www.groundwrk.app")
        host = window.location.origin;

      this.fetching = true;
      fetch(`${'https://www.groundwrk.app'}/api/grades`, {
        method: "GET",
        headers: {
          username,
          password,
          url: "https://powerschool.er9.org/"
        }
      })
        .then(g => {
          this.fetching = false;
          if (("" + g.status).startsWith("40")) {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "Error Logging In"
            });
            return;
          }
          g.json().then(body => {
            console.log(body);
            this.courses = body.courses.sort((a, b) => {
              return +a.expression[0] - +b.expression[0];
            });
            this.terms = body.terms;
            this.fetchedGrades = true;
            this.notLoggedIn = false;
            this.gpaCalc();
            this.exactPercentage();
            this.$store.commit("cacheCourses", this.courses);
            if (done) done();
          });
        })
        .catch(console.error);
    },
    signIn() {
      localStorage.setItem('username', this.username);
      this.$store.commit("login", {
        username: this.username,
        password: this.password
      });
      this.fetchGrades(this.username, this.password);
    },
    onRight({ reset }) {
      reset();
    },
    refresh(done) {
      this.fetchGrades(this.username, this.password, done);
    },
    formatScore(assignment) {
      return `${(+assignment.score).toFixed(1)} / ${(
        +assignment.score / +assignment.percentage
      ).toFixed(1)}`;
    },
    gpaCalc() {
      let ranges = [
        [0.93, 4.0, 5.0],
        [0.9, 3.7, 4.7],
        [0.87, 3.3, 4.3],
        [0.83, 3.0, 4.0],
        [0.8, 2.7, 3.7],
        [0.77, 2.3, 2.3],
        [0.73, 2.0, 2.0],
        [0.7, 1.7, 1.7],
        [0.67, 1.3, 1.3],
        [0.63, 1.0, 1.0],
        [0.6, 0.7, 0.7],
        [-1, 0, 0]
      ];
      let totalW = 0;
      let totalU = 0;
      for (let c of this.courses) {
        for (let r of ranges) {
          if (r[0] <= +c.percentage) {
            if (
              c.name.toLowerCase().startsWith("ap ") ||
              c.name.toLowerCase().startsWith("honors ") ||
              c.name.toLowerCase().startsWith("h ")
            )
              totalW += r[2];
            else totalW += r[1];
            totalU += r[1];
            break;
          }
        }
      }
      this.gpaW = (totalW / this.courses.length).toFixed(2);
      this.gpa = (totalU / this.courses.length).toFixed(2);
    },
    exactPercentage(){
      
      let total = 0;
      let recieved = 0;
      let exactPercent = 0;
      for(let c of this.courses){
        total =0;
        recieved = 0;
        exactPercent = 0;
        for(let a of c.assignments){
          if(+a.score>0 && a.percentage>0){
          recieved += +a.score*a.weight
          total+= (+a.score*a.weight)/a.percentage
          }
        }
        c.exactPercent = +recieved/total
        console.log(exactPercent, c)
      }

    }
  },
  beforeMount(){
    let usrname = localStorage.getItem('username');
    this.username = usrname;
  }
};
</script>

<style lang="scss" scoped>
.gradeCard {
  width: 90%;
  margin: 0px auto;
}

@for $i from 0 to 32 {
  .courseItem:nth-child(#{$i}) {
    animation-delay: calc(0.1s * #{$i});
  }
}

.courseItem {
  animation: fadeIn 0.2s ease-in;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.toolbar {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>