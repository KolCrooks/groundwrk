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
        <div id="signinButton">test</div>
      </div>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      maximizedToggle: true,
      client_id:
        "356679115182-60a1e40t5i2neo5l2472l0sbtre8ju9v.apps.googleusercontent.com",
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
      el = document.getElementById("signinButton");
      this.auth2.attachClickHandler(
        el,
        {},
        function(googleUser) {
          document.getElementById("name").innerText =
            "Signed in: " + googleUser.getBasicProfile().getName();
        },
        function(error) {
          alert(JSON.stringify(error, undefined, 2));
        }
      );
    }
  },
  mounted() {
    let _this = this;
    gapi.load("auth2", function() {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      _this.auth2 = gapi.auth2.init({
        client_id: _this.client_id,
        cookiepolicy: "single_host_origin"
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
    });
  },
  name: "LoginHandle"
};
</script>