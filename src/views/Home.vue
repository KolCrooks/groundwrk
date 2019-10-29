<template>
  <div class="home">
    
    <div id = "title" style="color:black;font-size:60px;font-weight:bold;">
      PowerClass
    </div>
    <div id = "weekSchedule" style="color:black;font-size:40px;font-weight:bold;">
      WeekSchedule
    </div>
       <CalendarWeek
            :date="date"
          ></CalendarWeek>
      <div id = "studentStats" style="color:black;font-size:40px;font-weight:bold;">
      StudentStats
      </div>
      <div id = "studentStatsInfo" style="color:black;font-size:20px;">
        Focus of the Day:
        <br>Current GPA: 
        <br>Alerts:  
      </div>   
      <div id = "profile" style="color:black;font-size:40px;font-weight:bold;">
      UserProfile
      </div>
      <div id = "profileInfo" style="color:black;font-size:20px;">
        Name:
        <br>Scheduling Confines: 
      </div> 
  </div>
</template>
 
<script>
import CalendarWeek from '@/components/CalendarWeek.vue';

export default {  
  computed:{
    date(){
      return new Date();
    }
  },
  components: {
    CalendarWeek,
  }
};
</script>

<style type = "text/css">

#title{
  width: 100%;
  height: 60px;
  background-color: dodgerblue;
  border: 10px solid dodgerBlue;
}
#weekSchedule{
  width: 100%;
  height: 50px;
  background-color: rgb(114, 114, 114);
   border: 10px solid rgb(114, 114, 114);
}
#studentStats{
  width: 100%;
  height: 50px;
  background-color: Tomato;
  border: 10px solid Tomato;
}
#studentStatsInfo{
  width: 100%;
  height: 70px;
  background-color: Tomato;
  border: 10px solid Tomato;
 
}
#profile{
  width: 100%;
  height: 30px;
  background-color: rgb(111, 112, 119);
  border: 10px solid rgb(111, 112, 119);
}
#profileInfo{
  width: 100%;
  height: 30px;
  background-color: rgb(111, 112, 119);
  border: 10px solid rgb(111, 112, 119);
 
}
</style>