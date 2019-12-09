<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn v-close-popup flat round dense color="primary" icon="close" />
    </q-card-section>

    <form @submit.prevent="submitForm">
      <q-card-section>
        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.name"
            :rules="[val => !!val || 'Field is Required']"
            ref="name"
            label="Task Name"
            class="col"
          />
        </div>

        <div class="row q-mb-sm">
          <q-input
            outlined
            ref="date"
            label="Study Date"
            v-model="taskToSubmit.dueDate"
            :rules="[val => !!val || 'Field is Required']"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy>
                  <q-date v-model="taskToSubmit.dueDate" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div class="row q-mb-sm">
          <q-input
            outlined
            ref="time"
            label="Study Time"
            v-model="taskToSubmit.studyTime"
            :rules="[val => !!val || 'Field is Required']"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.studyTime" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Save" color="primary" type="submit" />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        studyTime: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions(["tasks", "addTask"]),
    submitForm() {
      console.log("submitForm");
      this.$refs.name.validate();
      this.$refs.date.validate();
      this.$refs.time.validate();
      if (
        !this.$refs.name.hasError &&
        !this.$refs.date.hasError &&
        !this.$refs.time.hasError
      ) {
        this.submitTask();
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit);
      console.log("submitTask");
    }
  }
};
</script>
