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
    <BaseInput v-model="taskTitle" full-width></BaseInput>
    <BaseButton size="m">create</BaseButton>
  </form>
</template>

<style scoped lang="scss">
.create-task {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.create-task__input {
  height: 32px;
  flex-grow: 1;
  padding: 0 12px;
  border: 1px solid $gray200;
}
</style>
