<template>
    <div class="loginHandle">
        <q-dialog
        v-model="dialog"
      persistent
      :maximized="maximizedToggle"
      transition-show="slide-up"
      transition-hide="slide-down"
      >
      <GoogleLogin></GoogleLogin>
      </q-dialog>
    </div>
</template>

<script>
export default {
    data(){
        return {
            dialog: false,
            maximizedToggle: true,
        }
    },
    name: "LoginHandle",
}
</script>