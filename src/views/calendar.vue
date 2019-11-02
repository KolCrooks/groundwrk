<template>
  <div>
    <q-toolbar class="toolbar bg-secondary text-white">
        <q-btn flat square dense>
          <q-avatar square>
            <img src="../assets/NOBACK.png">
          </q-avatar>
        </q-btn>
        <q-toolbar-title>Calendar</q-toolbar-title>
        <q-btn flat round dense icon="search" />
    </q-toolbar>
    <CalendarWeek :date="new Date()"></CalendarWeek>
  </div>
</template>

<script>
import CalendarWeek from '@/components/CalendarWeek.vue';

export default {
  components: {CalendarWeek},
};
</script>

<style lang="scss" scoped>
.toolbar {
  position: sticky;
  top: 0;
}
</style>