<template>

<q-layout>
<q-page-container>
    
<q-page class="q-pa-sm">
    <q-list bordered>
      <q-item 
      v-for="task in tasks"
      :key="task.id"
      v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{task.name}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
</q-page>
</q-page-container>
</q-layout>
</template>

<script>
export default{
    data(){
        return{
            tasks: [
            {
            id: 1,
            name: 'Study for Calc',
            completed: false
             },
             {
            id: 2,
            name: 'Study for Chem',
            completed: false
             },
            {
            id: 3,
            name: 'Study for Biology',
            completed: false
            }
            ]
        }
    }
}
</script>

<style>

</style>