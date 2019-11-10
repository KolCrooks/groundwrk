<template>
    <q-item
        @click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-white-1' : 'bg-green-1'"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" color="primary" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{'text-strikethrough' : task.completed}">{{task.name}}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.completed" side>
          <q-btn @click.stop="deleteTask(index)" flat round dense color="primary" icon="delete" />
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
</template>

<script>
export default {
    
}
</script>

<style>

</style>