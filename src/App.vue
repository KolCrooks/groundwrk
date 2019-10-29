<template>
  <div id="app">
    <router-view />
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: { NavBar }
};
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100vh;
}
</style>
