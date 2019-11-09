<template>
  <div class="loginHandle">
    <q-dialog v-model="dialog" persistent @show="attachSignin">
      <q-card>
        <q-card-section class="row items-center">
          <div id="signinButton"></div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import "../script/platform.js";

export default {
  data() {
    return {
      dialog: true,
      maximizedToggle: true
    };
  },
  methods: {
    onSuccess(googleUser) {
      this.dialog = false;
      console.log("LoggedIn");
      this.$store.commit("googleLogin", googleUser);
    },
    onFailure(error) {
      this.$q.notify({
        color: "red-5",
        textColor: "white",
        icon: "warning",
        message: "Error Logging In"
      });
      console.log(error);
    },
    attachSignin() {
      let _this = this;
      gapi.signin2.render("signinButton", {
        // scope: "profile email",
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