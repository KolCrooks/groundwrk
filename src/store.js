import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: {
      username: "",
      password: ""
    },
    courses: [],
    googleUser: null
  },
  mutations: {
    login(state, newLogin) {
      state.login = newLogin;
    },
    cacheCourses(state, pushedState) {
      state.courses = pushedState;
    },
    googleLogin(state, googleU) {
      state.googleUser = googleU;
    }
  },
  getters: {
    getLogin(state) {
      return state.login;
    },
    courseCache(state) {
      return state.courses;
    },
    googleUser(state) {
      return state.googleUser;
    }
  }
});
