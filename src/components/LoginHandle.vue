<template>
  <div class="loginHandle">
    <q-dialog
      v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
      @show="attachSignin"
    >
      <div class="dialogContent bg-white">
        <div id="signinButton"></div>
      </div>
    </q-dialog>
  </div>
</template>

<script>
import "../script/platform.js";

export default {
  data() {
    return {
      dialog: false,
      maximizedToggle: true,
      auth2: null
    };
  },
  methods: {
    onSuccess(googleUser) {
      console.log("Logged in as: " + googleUser.getBasicProfile().getName());
    },
    onFailure(error) {
      console.log(error);
    },
    attachSignin() {
      let _this = this;
      gapi.signin2.render("signinButton", {
        scope: "profile email",
        width: 240,
        height: 50,
        longtitle: true,
        theme: "dark",
        onsuccess: _this.onSuccess,
        onfailure: _this.onFailure
      });
    }
  },
  name: "LoginHandle"
};
</script>