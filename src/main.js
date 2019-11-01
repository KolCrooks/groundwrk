import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { LoaderPlugin } from "vue-google-login";

import "./quasar";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

Vue.use(LoaderPlugin, {
  client_id: '356679115182-60a1e40t5i2neo5l2472l0sbtre8ju9v.apps.googleusercontent.com'
});
