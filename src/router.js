import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import calendar from "./views/calendar.vue";
import grades from "./views/grades.vue";
import profile from "./views/profile.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/calendar",
      name: "calendar",
      component: calendar
    },
    {
      path: "/grades",
      name: "grades",
      component: grades
    },
    {
      path: "/profile",
      name: "profile",
      component: profile
    }
  ]
});
