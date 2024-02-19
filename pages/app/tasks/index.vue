<script setup lang="ts">
import { useTaskStore } from "~/store/taskStore";
import type { Task } from "~/api/task/types";

definePageMeta({
  name: 'tasks'
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
  <div class="task-page">
    <div class="task-page__item task-page__item_first"></div>
    <div class="task-page__item"></div>
    <div class="task-page__item"></div>
    <div class="task-page__item"></div>
    <div class="task-page__item task-page__item_last"></div>
  </div>
</template>

<style scoped lang="scss">
.task-page {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  width: 100%;
  padding: 32px;
  background-color: $light50;
}
.task-page__item {
  background-color: $light100;
  border-radius: 24px;
}
.task-page__item_first {
  grid-column: 1/3;
  grid-row: 1/3;
}
.task-page__item_last {
  grid-column: 2/4;
  grid-row: 3/4;
}
</style>
