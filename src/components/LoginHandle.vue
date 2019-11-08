<template>
    <div class="loginHandle">
        <q-dialog
        v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
      >
      </q-dialog>
    </div>
</template>

<script>

export default {
    data(){
        return {
            dialog: false,
            maximizedToggle: true,
            googleSignInParams: {
                client_id: '356679115182-60a1e40t5i2neo5l2472l0sbtre8ju9v.apps.googleusercontent.com',
            }
        }
    },
    methods: {
        onSignInSuccess (googleUser) {
            // `googleUser` is the GoogleUser object that represents the just-signed-in user.
            // See https://developers.google.com/identity/sign-in/web/reference#users
            const profile = googleUser.getBasicProfile() // etc etc
        },
        onSignInError (error) {
            // `error` contains any error occurred.
            console.log('OH NOES', error)
        }
    },
    name: "LoginHandle",
}
</script>