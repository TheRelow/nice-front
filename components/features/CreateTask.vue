<script setup lang="ts">
import {useTaskStore} from "~/store/taskStore";

const taskStore = useTaskStore()

const taskTitle = ref('')

function createTask() {
  if (!taskTitle.value) return
  taskStore.createTask(taskTitle.value)
  taskTitle.value = ''
}
</script>

<template>
  <form @submit.prevent="createTask" class="create-task">
    <v-text-field v-model="taskTitle" variant="solo" density="compact" single-line hide-details placeholder="Task title"></v-text-field>
    <v-btn @click="createTask">create</v-btn>
  </form>
</template>

<style scoped lang="scss">
.create-task {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 12px;
}
.create-task__input {
  height: 32px;
  flex-grow: 1;
  padding: 0 12px;
  border: 1px solid $gray200;
}
</style>
