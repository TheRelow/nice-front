<template>
  <div class="task-page">
    <div class="task-page__header">
      <div class="task-page__header-name">
        {{ store.folder.activeFolderTitle }}
      </div>
      <div class="task-page__header-controls">

      </div>
    </div>
    <TaskList :tasks="toDoTasks" class="task-page__tasks"></TaskList>
    <CreateTask class="task-page__create-task" />
    <form @submit.prevent="createTask" class="create-task">
      <input v-model="taskTitle" placeholder="Task title" class="create-task__input" />
      <base-button @click="createTask" :rounding="false">create</base-button>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "~/api/task/types";

import { useTaskStore } from "~/store/taskStore";
const taskStore = useTaskStore()

definePageMeta({
  name: "tasks",
});

const taskTitle = ref('')

function createTask() {
  if (!taskTitle.value) return
  store.task.createTask({title: taskTitle.value})
  taskTitle.value = ''
}

const toDoTasks = computed<Task[]>(() => {
  return store.task.taskList
    ?.filter((el: Task) => !el.isDone && (store.folder.activeFolderId === undefined || el.parentFolderId === store.folder.activeFolderId))
    .reverse()
});

// TODO: понять почему не работает с composable
await useAsyncData("tasks", () => taskStore.loadAllTasks());
</script>
