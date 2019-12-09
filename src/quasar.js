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
      primary: "#DD5B1F",
      secondary: "#282828",
      accent: "#AF2D1C",

      dark: "#1d1d1d",

      positive: "#21BA45",
      negative: "#C10015",
      info: "#31CCEC",
      warning: "#F2C037"
    },
    dark: true
  }
});


