<template>
  <div>
    <h1>Grades</h1>
    <q-card v-for="course in courses" class="gradeCard" :key="course.name">
      <q-card-section>

      </q-card-section>
    </q-card>
    <q-dialog
        v-model="dialog"
      persistent
      :maximized="true"
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
      courses: [],
      dialog: false,
    }
  },
  methods: {
    fetchGrades(username,password){
      fetch('http://localhost:3000/api/grades',{
        method: 'GET',
        headers: {
          username,
          password,
          url: 'https://powerschool.er9.org/'
        }
      }).then(console.log).catch(console.error)
    }
  },
  created(){
  },
  mounted(){
    
  }
};
</script>

<style lang="scss" scoped>
.gradeCard {
  width: 90%;
  margin: 0px auto;
}
</style>