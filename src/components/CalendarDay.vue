<template>
  <div @click="assignmentPrompt" class="dayContainer shadow-2">
    <div class="dayContents">
      <div class="day">{{month}} {{ day }}</div>t
      <br />t
      <br />t
      <br />t
      <br />t
    </div>
  </div>
</template>

<script>
export default {
  props: ["date"],
  computed: {
    day() {
      return this.date.getDate();
    },
    month() {
      return this.date.toLocaleString("default", { month: "short" });
    }
  },
  methods: {
    assignmentPrompt() {
      if (!this.$store.state.zoomedOut) {
        this.$store.commit("popoutActive", true);
      }
    }
  },
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
</script>

<style lang="scss" scoped>
.dayContainer {
  padding-bottom: calc(var(--dayWidth) / 1.61803398875 * 2);
  position: relative;
  margin: 1.5px;
}
.dayContents {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.day {
  text-align: right;
  margin-right: 3%;
  margin-top: 2%;
  font-size: 1.5rem;
}
</style>
