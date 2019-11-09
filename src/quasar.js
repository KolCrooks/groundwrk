import Vue from "vue";

import "./styles/quasar.styl";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import Quasar from "quasar";

Vue.use(Quasar, {
  config: {
    brand: {
      primary: "#00171f",
      secondary: "#003459",
      accent: "#00a8e8",

      positive: "#21BA45",
      negative: "#C10015",
      info: "#007ea7",
      warning: "#F2C037"
    }
  }
});
