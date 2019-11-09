<template>
  <div :class="dim">
    <q-toolbar class="toolbar bg-secondary text-white">
      <q-btn flat round dense>
        <q-icon name="r_menu" />
      </q-btn>
      <q-toolbar-title>Calendar</q-toolbar-title>
      <q-btn flat round dense icon="search" />
    </q-toolbar>
    <CalendarWeek :date="new Date()"></CalendarWeek>
    <LoginHandle></LoginHandle>
  </div>
</template>

<script>
import CalendarWeek from "@/components/CalendarWeek.vue";
import LoginHandle from "@/components/LoginHandle.vue";

export default {
  components: { CalendarWeek, LoginHandle },
  computed: {
    dim() {
      return {
        dimmed: !this.$store.getters.googleUser
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.toolbar {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>