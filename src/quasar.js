import Vue from "vue";

import "./styles/quasar.styl";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import Quasar from "quasar";
console.log(Quasar);
Vue.use(Quasar, {
  config: {
    brand: {
      primary: "#ff4221",
      secondary: "#ffd524",
      accent: "#d6ff00",

      dark: "#1d1d1d",

      positive: "#ffc104",
      negative: "#C10015",
      info: "#31CCEC",
      warning: "#F2C037"
    },
    dark: true
  }
});
