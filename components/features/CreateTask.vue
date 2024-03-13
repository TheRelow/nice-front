<script setup lang="ts">
const taskTitle = ref('')

function createTask() {
  if (!taskTitle.value) return
  store.task.createTask({title: taskTitle.value})
  taskTitle.value = ''
}
</script>

<template>
  <form @submit.prevent="createTask" class="create-task">
    <base-input v-model="taskTitle" placeholder="Task title"></base-input>
    <base-button @click="createTask">create</base-button>
  </form>
</template>
