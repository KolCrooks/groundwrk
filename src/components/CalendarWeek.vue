<template>
  <div class="calWeek">
    <CalendarDay
        v-for="d in dates"
        :date="d"
        :key="d.toString()">
    </CalendarDay> 
  </div>
</template>

<script>
import CalendarDay from '@/components/CalendarDay.vue';

export default {
    props: ["date"],
    computed: {
        dates(){
            let ret = [];
            for(let i = 0; i < 7; i++){
                ret.push(new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()+i));
            }
            return ret;
        }
    },
    components: {CalendarDay}
}
</script>


<style lang="scss" scoped>
    .calWeek {
        display: flex;
        flex-direction: row;
        scroll-snap-align: start;
        width: 100%;
        margin: 0 auto;
    }
</style>