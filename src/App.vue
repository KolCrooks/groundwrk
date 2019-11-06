<template>
  <div id="q-app">
    <LoginHandle></LoginHandle>
    <router-view />
    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import LoginHandle from "@/components/LoginHandle.vue"

export default {
  components: { NavBar, LoginHandle }
};
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100vh;
}
.text-strikethrough{
  text-decoration: line-through;
}
</style>
