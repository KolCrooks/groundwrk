<template>
  <div id="q-app">
    <router-view class="route" />
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
  height: 100%;
  position: fixed;
  overflow: hidden;
  overscroll-behavior-y: none;
}

#q-app {
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
