<template>
  <div class="home">
    
    <h1>PowerClass</h1>
       <CalendarWeek
            :date="new Date('nov 7, 2019')"
          ></CalendarWeek>
  </div>
</template>
 
<script>
import CalendarWeek from '@/components/CalendarWeek.vue';

export default {
  components: {
    CalendarWeek,
  }
};
</script>