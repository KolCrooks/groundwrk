<template>
  <div id="app">
    <NavBar></NavBar>
    <router-link to="grades">Grades</router-link>
    <router-link to = "calendar">Calendar</router-link>
    <router-link to = "profile">Profile</router-link>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
  components: { NavBar }
}
</script>
