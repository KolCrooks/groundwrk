<template>
  <div :class="{'dimmed':notLoggedIn}">
    <q-toolbar class="toolbar bg-secondary text-white">
      <q-btn flat round dense to="/grades">
        <q-icon v-if="!inCV" name="r_menu" />
        <q-icon v-if="inCV" name="r_arrow_back" />
      </q-btn>
      <q-toolbar-title>Grades</q-toolbar-title>
      <div v-if="(gpaW != '') && (gpa != '')">
        <q-chip color="accent" text-color="white">GPAW: {{ gpaW }}</q-chip>
        <q-chip color="accent" text-color="white">GPAU: {{ gpa }}</q-chip>
      </div>
    </q-toolbar>
    <q-spinner
      class="fixed-center"
      color="primary"
      size="5%"
      :thickness="10"
      v-if="!fetchedGrades"
    />

    <!-- Courses -->
    <div class="scroll" v-if="!inCV">
      <q-pull-to-refresh @refresh="refresh">
        <q-list bordered separator>
          <q-item
            class="courseItem"
            clickable
            v-for="course in courses"
            :key="course.name"
            :to="`/grades/${course.id}`"
          >
            <q-item-section>{{ course.name }}</q-item-section>
            <q-item-section side>
              <q-item-label caption>
                <q-item-label class="row justify-end" caption>
                  <q-avatar size="md" rounded color="primary" text-color="white">{{ course.grade }}</q-avatar>
                </q-item-label>
                <q-item-label
                  class="row justify-end"
                  caption
                >{{ `${(+course.percentage * 100).toFixed(0)}%` }}</q-item-label>
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
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [],
      fetchedGrades: false,
      notLoggedIn: true,
      username: "",
      password: "",
      gpaW: "",
      gpa: ""
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
      this.gpaWCalc();
      this.fetchedGrades = true;
    }
  },
  methods: {
    fetchGrades(username, password) {
      fetch("http://localhost:3000/api/grades", {
        method: "GET",
        headers: {
          username,
          password,
          url: "https://powerschool.er9.org/"
        }
      })
        .then(g => {
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
            this.courses = body.sort((a, b) => {
              return +a.expression[0] - +b.expression[0];
            });
            this.fetchedGrades = true;
            this.notLoggedIn = false;
            this.gpaWCalc();
            this.gpaCalc();
            this.$store.commit("cacheCourses", this.courses);
          });
        })
        .catch(console.error);
    },
    signIn() {
      this.$store.commit("login", {
        username: this.username,
        password: this.password
      });
      this.fetchGrades(this.username, this.password);
    },
    onRight({ reset }) {
      reset();
    },
    refresh() {
      this.fetchGrades(this.username, this.password);
    },
    formatScore(assignment) {
      return `${(+assignment.score).toFixed(1)} / ${(
        +assignment.score / +assignment.percentage
      ).toFixed(1)}`;
    },
    gpaWCalc() {
      let totalP = 0;
      let toalCredit =0 
      for (let c of this.courses) {
        if (c.name.toLowerCase().startsWith("ap ") && c.percentage > 0.8) {
          totalP += +c.percentage + 0.1;
          totalCredit += +c.percentage + 1;
        } else if (
          c.name.toLowerCase().startsWith("honors ") &&c.percentage > 0.8) {
          totalP += +c.percentage + 0.1;
        } else {
          totalP += +c.percentage;
        }
      }
      let gpaW = totalP / this.courses.length;
      this.gpaW = (gpaW * 4).toFixed(2);
      return (gpaW * 4).toFixed(2);
    },
    gpaCalc() {
      let totalP = 0;
      for (let c of this.courses) {
        totalP += c.percentage;
      }
      let gpa = totalP / this.courses.length;
      this.gpa = (gpa * 4).toFixed(2);
      return (gpa * 4).toFixed(2);
    },
    percentToCredit(){
        let credit = 0;
        if(c.percentage < .60){
            credit = 0;
        }
        else if(c.percentage < .63){
            credit = .7;
        }
        else if(c.percentage < .67){
            credit = 1;
        }
        else if(c.percentage <.70){
            credit = 1.3;
        }
        else if(c.percentage < .73){
            credit = 1.7;
        }
        else if(c.percentage < .77){
            credit = 2.0;
        }
        else if(c.percentage < .80){
            credit = 2.3;
        }
        else if(c.percentage < .80){
            credit = 2.3;
        }
        else if(c.percentage < .83){
            credit = 2.7;
        }
        else if(c.percentage < .87){
            credit = 3.0;
        }
        else if(c.percentage < .90){
            credit = 3.3;
        }
        else if(c.percentage < .93){
            credit = 3.7;
        }
        else if(c.percentage < .98){
            credit = 4.0;
        }
        else{
            credit = 4.0
        }
    }
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