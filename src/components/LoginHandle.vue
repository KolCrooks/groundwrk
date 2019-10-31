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
        }
    },
    name: "LoginHandle",
}
</script>