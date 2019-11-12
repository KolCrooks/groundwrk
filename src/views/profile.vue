<template>
  <div>
    <q-toolbar class="toolbar bg-secondary text-white">
      <q-btn flat round dense>
        <q-icon name="r_menu" />
      </q-btn>
      <q-toolbar-title>Profile</q-toolbar-title>
    </q-toolbar>

    <div class="rpw q-pa-sm bg-primary">
      <q-input
        v-model="newTask"
        @keyup.enter="addTask"
        class="col"
        color="blue"
        filled
        bg-color="white"
        placeholder="Add Task"
        dense
      >
        <template v-slot:append>
          <q-btn @click="addTask" round dense flat icon="add" />
        </template>
        <q-input 
        filled 
        v-model="date" >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date v-model="date" @input="() => $refs.qDateProxy.hide()" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
      </q-input>
      
    </div>
    <q-list separator bordered>

    <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key" >
    </task>

      
    </q-list>
  </div>
</template>

<script>


export default {
    data(){
        return{
            date: ''
        }
    },
  computed:{
     tasks(){
         return this.$store.getters.tasks;
     }
  },
  components: {
      'task' : require('@/components/Tasks/Task.vue').default
  },
  methods: {
    addTask() {
      if (this.newTask.replace(/\s/gm, "") != "") {
        this.tasks.push({
          name: this.newTask,
          completed: false
        });
        this.newTask = "";
      }
    },
    deleteTask(index) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Delete? There is no going back.",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.tasks.splice(index, 1);
          this.$q.notify({
              message: 'Task Deleted',
              textColor: 'white',
              timeout: 750,
              icon: 'delete_forever'
          })
        });
    }
  },
};
</script>

<style>
</style>