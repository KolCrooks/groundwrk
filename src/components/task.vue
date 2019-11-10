<template>
  <q-btn class="drop" ripple :label="name" @click="clicked" :icon-right="state" no-caps></q-btn>
</template>

<script>
export default {
  props: ["name"],
  methods: {
    clicked() {
      if (!this.open) {
        this.state = "expand_less";
        this.open = !this.open;
      } else {
        this.state = "expand_more";
        this.open = !this.open;
      }
    }
  },
  data() {
    return {
      open: false,
      state: "expand_more"
    };
  }
};
</script>

<style>
.drop {
  display: block;
  min-width: 60%;
  margin-top: 2%;
  margin-bottom: 2%;
  color: white;
  background-color: black;
}
</style>