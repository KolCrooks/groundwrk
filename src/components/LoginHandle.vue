<template>
  <div class="loginHandle">
    <q-dialog v-model="dialog" @show="dialogOpen" seamless>
      <q-card v-if="authLoaded">
        <q-card-section class="row items-center">
          <div id="gSignInWrapper" @click="handleLogin">
            <img :src="require('../assets/Google_SignInButton.png')" class="signInImage" />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import "@/script/gapi.js";

export default {
  data() {
    return {
      dialog: true,
      maximizedToggle: true,
      authLoaded: false
    };
  },
  methods: {
    onSuccess(signedIn) {
      if (!signedIn) return;
      let googleUser = gapi.auth2.getAuthInstance();
      this.dialog = false;
      this.$store.commit("googleLogin", googleUser);
      this.$emit("loggedIn");
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
    dialogOpen() {
      let _this = this;
      gapi.load("client:auth2", () => {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        gapi.client
          .init({
            apiKey: "AIzaSyDXtlY0qIL3pYu8P3zTMxB3Zf5W3XAP9sg",
            clientId:
              "356679115182-60a1e40t5i2neo5l2472l0sbtre8ju9v.apps.googleusercontent.com",
            discoveryDocs: [
              "https://classroom.googleapis.com/$discovery/rest?version=v1"
            ],
            scope:
              "https://www.googleapis.com/auth/classroom.courses.readonly " +
              "https://www.googleapis.com/auth/classroom.announcements.readonly " +
              "https://www.googleapis.com/auth/classroom.coursework.me"
          })
          .then(() => {
            this.authLoaded = true;
            if (gapi.auth2.getAuthInstance().isSignedIn.get())
              this.onSuccess(true);
            gapi.auth2
              .getAuthInstance()
              .isSignedIn.listen(a => this.onSuccess(a));
          });
      });
    },
    handleLogin() {
      gapi.auth2.getAuthInstance().signIn();
    }
  },
  name: "LoginHandle"
};
</script>

<style lang="scss" scoped>
.signInImage {
  height: 4rem;
  &:hover {
    cursor: pointer;
  }
}
</style>