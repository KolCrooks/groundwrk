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
    googleUser: null,
    tasks:[{
      id: 1,
      name: "Study for Calc",
      completed: false,
      dueDate: "2019/11/6",
      studyTime: "30 minutes"
    },
    {
      id: 2,
      name: "Study for Chem",
      completed: false,
      dueDate: "2019/11/7",
      studyTime: "20 minutes"
    },
    {
      id: 3,
      name: "Study for Biology",
      completed: false,
      dueDate: "2019/11/9",
      studyTime: "15 minutes"
    }
    ]
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
    },
    tasks: (state) => {
      return state.tasks;
    }
  }
});
