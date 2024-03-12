<template>
  <div class="task-page">
    <div class="task-page__item main-task task-page__item_1">
      <div class="main-task__title">Main&nbsp;task:</div>
      <div class="main-task__text">
        <b>Generic</b> design for <b>crud</b> sections: folders, tasks,<br />
        goals... , education, dev, projects with <b>new cool UI/UX</b>
      </div>
    </div>
    <div class="task-page__item task-page__item_2 task-page__tasks">
      <h1 style="margin-top: 0">{{ $t("ToDo") }}</h1>
      <TaskList :tasks="toDoTasks"></TaskList>
    </div>
    <div class="task-page__item stat-info task-page__item_3">
      <div class="stat-info__title">34</div>
      <div class="stat-info__subtitle">tasks</div>
      <div class="stat-info__text">done this week</div>
    </div>
    <div class="task-page__item task-page__item_4">
      <TaskCreator />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "~/api/task/types";

import { useTaskStore } from "~/store/taskStore";
const taskStore = useTaskStore()

definePageMeta({
  name: "tasks",
});

const toDoTasks = computed((): Task[] => {
  return store.task.taskList
    ?.filter((el: Task) => !el.isDone && el.parentFolderId === store.folder.activeFolder)
    .reverse()
});

// TODO: понять почему не работает с composable
await useAsyncData("tasks", () => taskStore.loadAllTasks());
</script>

<style scoped lang="scss">
.task-page {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 24px;
  width: 100%;
  height: 100%;
  background-color: $light50;
}
.task-page__item {
  background-color: $light100;
  border-radius: 24px;
}
.task-page__item_1 {
  grid-column: 1/3;
  grid-row: 1/2;
  display: flex;
}
.task-page__item_2 {
  grid-column: 1/3;
  grid-row: 2/7;
}
.task-page__item_3 {
  grid-column: 3/4;
  grid-row: 1/3;
}
.task-page__item_4 {
  grid-column: 3/4;
  grid-row: 3/7;
}
.task-page__tasks {
  padding: 24px;
  overflow: auto;
}
.main-task {
  display: flex;
  align-items: center;
  padding: 24px;
  color: $gray700;
  font-size: 1.3em;
}
.main-task__title {
  font-size: 2.3em;
  font-weight: 800;
  color: $primary;
}
.main-task__text {
  padding-left: 40px;
  font-weight: 400;
  letter-spacing: 1px;
  b {
    font-weight: 600;
    color: $red;
  }
}
.stat-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: $gray700;
  border: 3px solid $green;
  background-color: $light50;
}
.stat-info__title {
  font-size: 5rem;
  font-weight: 800;
  line-height: 1;
  color: $green;
}
.stat-info__subtitle {
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
  margin-top: -8px;
  margin-bottom: 8px;
}
</style>
