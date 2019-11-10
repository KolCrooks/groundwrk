<template>
  <div class="dayContents">
    <div class="day">{{month}} {{ day }}</div>
    <q-item class="task" v-ripple clickable v-for="task in tasks" :key="task.name">
      <q-item-section>{{ task.name }}</q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          name: "Study for Calc",
          howLong: "20 Minutes",
          testDay: "Assingment on 4th"
        },
        {
          name: "Study for Chem",
          howLong: "15 Minutes",
          testDay: "Assingment on 6th"
        },
        {
          name: "Study for Biology",
          howLong: "15 Minutes",
          testDay: "Assingment on 5th"
        }
      ]
    };
  },
  props: ["date"],
  computed: {
    day() {
      return this.date.getDate();
    },
    month() {
      return this.date.toLocaleString("default", { month: "short" });
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.dayContents {
  background: #ffffff;
  margin: 3% 2.5% 3% 2.5%;
  padding: 2%;
  min-height: 18em;
  border-radius: 2px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.46);
}
.day {
  width: 100%;
  text-align: right;
  color: 'primary';
  font-size: 200%;
}
.task {
  color: 'secondary';
}
</style>
