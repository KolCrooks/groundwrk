<template>
  <div id="q-app">
    <router-view class="route" />
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { Dark } from "quasar";

export default {
  components: { NavBar },
  created() {
    let k = Dark;
    this.$q.dark.set(true);
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100%;
  position: fixed;
  overflow: hidden;
  overscroll-behavior-y: none;
}

#q-app {
  max-height: 100%;
  min-height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  overscroll-behavior-y: none;
  overflow: auto;
}

.route {
  flex-grow: 1;
}

.text-strikethrough {
  text-decoration: line-through;
}
</style>
