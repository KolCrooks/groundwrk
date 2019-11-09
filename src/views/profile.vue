<template>
<q-layout>
<q-page-container>
<q-page class="q-pa-sm">
    <div class="rpw q-pa-sm bg-primary">
            <q-input 
            v-model="newTask"
            @keyup.enter="addTask"
            class="col"
            square
            filled
            bg-color ="white"
            placeholder="Add Task" 
            dense>
        <template v-slot:append>
          <q-btn 
            @click="addTask"
            round
            dense 
            flat 
            icon="add" />
        </template>
      </q-input>
    </div>
    <q-list 
    separator
    bordered>
      <q-item 
      v-for="task in tasks"
      :key="task.id"
      @click="task.completed = !task.completed"
      :class="!task.completed ? 'bg-red-1' : 'bg-green-1'"
      clickable
      v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

            <q-item-section>
              <q-item-label :class="{'text-strikethrough' : task.completed}">{{task.name}}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <div class="row">
                <div class="column justify-center">
                  <q-icon name="event" size="18px" class="q-mr-xs" />
                </div>
                <div class="column">
                  <q-item-label class="row justify-end" caption>{{task.dueDate}}</q-item-label>
                  <q-item-label class="row justify-end" caption>
                    <small>{{task.studyTime}}</small>
                  </q-item-label>
                </div>
              </div>
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
            newTask:'',
            tasks: [
            {
            id: 1,
            name: 'Study for Calc',
            completed: false,
            dueDate: '2019/11/6',
            studyTime: '30 minutes'
             },
             {
            id: 2,
            name: 'Study for Chem',
            completed: false,
            dueDate: '2019/11/7',
            studyTime: '20 minutes'
             },
            {
            id: 3,
            name: 'Study for Biology',
            completed: false,
            dueDate: '2019/11/9',
            studyTime: '15 minutes'
            }
            ]
        }
    },
    methods: {
        addTask(){
            this.tasks.push({
                name: this.newTask,
                completed: false
            })
            this.newTask=''
        }
    }
}
</script>

<style>
</style>