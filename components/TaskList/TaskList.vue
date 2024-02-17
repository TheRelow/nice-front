<script setup lang="ts">
import type { Task as TaskType } from "~/api/task/types";

const props = withDefaults(defineProps<{
  tasks: TaskType[]
}>(), {
  tasks() {
      return []
  },
})
</script>

<template>
<div class="task-list">
  <div class="task-list__items">
    <TaskListItem v-for="task in props.tasks" :key="task.id" :id="task.id"></TaskListItem>
  </div>
</div>
</template>

<style scoped lang="scss">
</style>
