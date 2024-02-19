<script setup lang="ts">
import { useTaskStore } from "~/store/taskStore";
import type { Task } from "~/api/task/types";

definePageMeta({
  name: 'tasks',
  layoutSettings: {
    fileNavigation: 40,
  }
})

const taskStore = useTaskStore()
await useAsyncData('tasks',  () => taskStore.loadAllTasks())

const toDoTasks = computed((): Task[]=>{
  return taskStore.taskList?.filter((el: Task) => !el.isDone).reverse()
})
const doneTasks = computed((): Task[]=>{
  return taskStore.taskList?.filter((el: Task) => el.isDone)
})
</script>

<template>
  <div>
    <CreateTask></CreateTask>
    <h1>{{ $t('ToDo') }}</h1>
    <TaskList :tasks="toDoTasks"></TaskList>
    <h1>{{ $t('Done') }}</h1>
    <TaskList :tasks="doneTasks"></TaskList>
  </div>
</template>

<style scoped>

</style>
