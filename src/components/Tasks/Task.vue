<template>
    <q-item
        @click="updateTask({ id: id, updates: {completed: !task.completed}})"
        :class="!task.completed ? 'bg-white-1' : 'bg-green-1'"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" color="primary" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{'text-strikethrough' : task.completed}">
              {{task.name}}
              </q-item-label>
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

        <q-item-section v-if="task.completed" side>
          <q-btn 
          @click.stop="promptToDelete(id)" 
          flat 
          round 
          dense 
          color="primary" 
          icon="delete" />
        </q-item-section>

      </q-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props:['task', 'id'],
    methods: {
        ...mapActions(['updateTask', 'deleteTask']),
        promptToDelete(id){
            this.$q.dialog({
                title: "Confirm",
                message: "Delete? There is no going back.",
                ok: {
                    push: true
                },
                cancel: {
                    color: 'secondary'
                },
                persistent: true,
                }).onOk(() => 
                {this.deleteTask(id)
                this.$q.notify({
                    message: 'Task Deleted',
                    textColor: 'primary',
                    color: 'secondary',
                    timeout: 750,
                    icon: 'delete_forever'
          })},
                   )
            }
        }
        
    }
</script>

<style>

</style>
