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
    ?.filter((el: Task) => !el.isDone && (store.folder.activeFolder === undefined || el.parentFolderId === store.folder.activeFolder))
    .reverse()
});

// TODO: понять почему не работает с composable
await useAsyncData("tasks", () => taskStore.loadAllTasks());
</script>
