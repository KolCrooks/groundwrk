<template>
  <div :class="dim">
    <q-toolbar class="toolbar bg-primary text-white">
      <q-btn flat round dense>
        <q-icon name="r_menu" />
      </q-btn>
      <q-toolbar-title>Calendar</q-toolbar-title>
      <q-btn flat round dense icon="search" />
    </q-toolbar>
    <!-- <CalendarWeek :date="new Date()"></CalendarWeek> -->
    <div class="work">
      <div v-for="[k, v] in assignments" :key="k">
        <q-chip color="primary" text-color="white" icon="event">
          Day: {{ new Date(+k).toDateString() }}
        </q-chip>

        <q-card v-for="assign in v" :key="assign.id" class="q-mb-md">
          <q-card-section class="bg-secondary text-white">{{
            assign.work.text ? assign.work.text : assign.work
          }}</q-card-section>
          <q-card-actions
            align="left"
            @click="
              addTask(+k, assign.work.text ? assign.work.text : assign.work)
            "
          >
            <q-btn flat>Add To Tasks</q-btn>
          </q-card-actions>
        </q-card>
        <q-separator spaced></q-separator>
      </div>
    </div>
    <LoginHandle @loggedIn="fetchData"></LoginHandle>
  </div>
</template>

<script>
import CalendarWeek from "@/components/CalendarWeek.vue";
import LoginHandle from "@/components/LoginHandle.vue";

export default {
  components: { CalendarWeek, LoginHandle },
  data() {
    return {
      assignments: {},
      courses: []
    };
  },
  computed: {
    dim() {
      return {
        dimmed: !this.$store.getters.googleUser
      };
    }
  },
  methods: {
    async fetchData() {
      let r = await gapi.client.classroom.courses.list({
        courseStates: "ACTIVE"
      });
      this.courses = r.result.courses;

      let aPromises = [];
      let cPromises = [];

      for (let c of r.result.courses) {
        aPromises.push(
          gapi.client.classroom.courses.announcements.list({
            courseId: c.id,
            pageSize: 10
          })
        );
        cPromises.push(
          gapi.client.classroom.courses.courseWork.list({
            courseId: c.id
          })
        );
      }
      let announcements = (await Promise.all(aPromises)).flatMap(
        v => v.result.announcements
      );

      let courseWork = (await Promise.all(cPromises)).flatMap(
        v => v.result.courseWork
      );
      for (let a of announcements) {
        if (!a) continue;
        let txt = a.text.split("\n");
        let foundAssignments = [];
        for (let t of txt) {
          let h = /([0-9]*)(\/)([0-9]*)/g.exec(t);
          if (h && h[1] < 12 && h[3] < 33)
            foundAssignments.push({
              date: h[0],
              text: t
            });
        }
        if (foundAssignments.length > 1) {
          for (let aa of foundAssignments) {
            let date = Date.parse(`${aa.date}/${new Date().getFullYear()}`);
            if (Date.parse(a.updateTime) > date)
              date = Date.parse(`${aa.date}/${new Date().getFullYear() + 1}`);

            if (!this.assignments[date]) this.assignments[date] = [];
            this.assignments[date].push({
              work: aa,
              announce: a
            });
          }
        } else if (foundAssignments.length == 1) {
          let date = Date.parse(
            `${foundAssignments[0].date}/${new Date().getFullYear()}`
          );
          if (Date.parse(a.updateTime) > date)
            date = Date.parse(
              `${foundAssignments[0].date}/${new Date().getFullYear() + 1}`
            );
          if (!this.assignments[date]) this.assignments[date] = [];
          this.assignments[date].push({
            work: a.text,
            announce: a
          });
        }
      }
      for (let cw of courseWork) {
        if (!cw || !cw.dueDate) continue;
        let date = new Date(
          cw.dueDate.year,
          cw.dueDate.month - 1,
          cw.dueDate.day - 1
        ).getTime();
        if (!this.assignments[date]) this.assignments[date] = [];
        this.assignments[date].push({
          work: cw.title,
          courseWork: cw
        });
      }
      let temp = Object.entries(this.assignments);
      this.assignments = null;
      temp = temp.sort((a, b) => (a[0] > b[0] ? -1 : a[0] < b[0] ? 1 : 0));
      this.assignments = temp;
      console.log(this.assignments);
    },
    addTask(date, text) {
      let taskToSubmit = {
        name: text,
        dueDate: new Date(date).toDateString(),
        studyTime: "",
        completed: false
      };

      this.$store.dispatch("addTask", taskToSubmit);

      this.$q.notify({
        message: "Task Added!",
        icon: "check",
        position: "center",
        timeout: 1000
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.toolbar {
  position: sticky;
  top: 0;
  z-index: 1;
}

.work {
  padding: 0 10%;
}
</style>
