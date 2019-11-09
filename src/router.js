import Vue from "vue";
import Router from "vue-router";
import calendar from "./views/calendar.vue";
import grades from "./views/grades.vue";
import profile from "./views/profile.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "profile",
      component: profile
    },
    {
      path: "/calendar",
      name: "calendar",
      component: calendar
    },
    {
      path: "/grades/:id?",
      name: "grades",
      component: grades
    }
  ]
});
