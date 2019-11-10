import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    login: {
      username: "",
      password: ""
    },
    courses: [],
    googleUser: null,
    tasks:{
      'ID1': {
      name: "Study for Calc",
      completed: false,
      dueDate: "2019/11/6",
      studyTime: "30 minutes"
    },
      'ID2': {
      name: "Study for Chem",
      completed: false,
      dueDate: "2019/11/7",
      studyTime: "20 minutes"
    },
      'ID3': {
      name: "Study for Biology",
      completed: false,
      dueDate: "2019/11/9",
      studyTime: "15 minutes"
    }
  }
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
  actions:{
    updateTask(){
      console.log('updateTask action')
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
    },
    tasks(state) {
      return state.tasks;
    }
  },
  modules:{}
});
