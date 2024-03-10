<script setup lang="ts">
import type { Task } from "~/api/task/types";

definePageMeta({
  name: 'tasks-list-example'
})

await useAsyncData('tasks',  () => store.task.loadAllTasks())

const toDoTasks = computed((): Task[]=>{
  return store.task.taskList?.filter((el: Task) => !el.isDone).reverse()
})
const doneTasks = computed((): Task[]=>{
  return store.task.taskList?.filter((el: Task) => el.isDone)
})
</script>

<template>
  <div class="task-page">
    <CreateTask></CreateTask>
    <h1>{{ $t('ToDo') }}</h1>
    <TaskList :tasks="toDoTasks"></TaskList>
    <h1>{{ $t('Done') }}</h1>
    <TaskList :tasks="doneTasks"></TaskList>
  </div>
</template>

<style scoped>
.task-page {
  width: 100%;
}
</style>
