<template>
  <div @click="assignmentPrompt" class="dayContainer">
    <div class="dayContents">
      <div class="day">{{ day }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['date'],
  computed: {
    day(){
      return this.date.getDate();
    },
    colorMod() {
      return this.nth ? 1 : 2;
    }
  },
  methods: {
    assignmentPrompt() {
      if (!this.$store.state.zoomedOut) {
        this.$store.commit('popoutActive', true);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .dayContainer {
      width: calc(100% / 7);
      padding-bottom: calc(calc(100% / 7) / 1.61803398875);
      position: relative;
      border-style: solid;
      border-color: gray;
      border-width: 1.5px;
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
  }
</style>
