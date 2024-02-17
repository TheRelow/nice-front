<script setup lang="ts">
import {useTaskStore} from "~/store/taskStore";

const taskStore = useTaskStore()
const props = defineProps<{
  id: number
}>()

const task = computed(() => {
  return taskStore.getTask(props.id)
})

function deleteTask() {
  taskStore.deleteTask(props.id)
}

const isEditing = ref(false)
const editingValue = ref()
function startEditing() {
  isEditing.value = true
  if (task.value && !editingValue.value) {
    editingValue.value = task.value.title
  }
}
function finishEditing() {
  isEditing.value = false
  taskStore.updateTask(props.id, {title: editingValue.value})
}
function cancelEditing() {
  isEditing.value = false
}

function toggleTaskStatus() {
  if (!task.value) return
  taskStore.updateTask(props.id, {isDone: !task.value.isDone})
}
</script>

<template>
  <div class="task-list__item" v-if="task">
    <div class="task__check">
      <BaseCheckbox :model-value="task.isDone" @click="toggleTaskStatus" />
    </div>
    <div class="task__main">
      <template v-if="!isEditing">
        {{ task.title }}
      </template>
      <BaseInput no-offset full-width v-model="editingValue" v-else></BaseInput>
      <div class="task__controls">
        <BaseButton @click="deleteTask" type="tertiary" size="xs" icon color="accent-light"><BaseIcon color="inherit" icon="delete"></BaseIcon></BaseButton>
        <BaseButton @click="startEditing" type="tertiary" size="xs" icon v-if="!isEditing"><BaseIcon color="inherit" icon="pencil"></BaseIcon></BaseButton>
        <template v-else>
          <BaseButton @click="finishEditing" type="tertiary" size="xs" icon><BaseIcon color="inherit" icon="check"></BaseIcon></BaseButton>
          <BaseButton @click="cancelEditing" type="tertiary" size="xs" icon><BaseIcon color="inherit" icon="cancel"></BaseIcon></BaseButton>
        </template>
      </div>
    </div>
  </div>
  <div class="error-task" v-else>
    Задача не найдена
  </div>
</template>

<style scoped lang="scss">
.task-list__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  min-height: 40px;
  padding: 0.5rem;
  margin-top: -1px;
  border-radius: 6px;
  &:hover {
    background-color: rgba(255,255,255, 0.1);
  }
  &:first-child {
  }
  &:last-child {
    border-bottom: none;
  }
}
.task__main {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  cursor: default;
  &:after {
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: $gray400;
    content: '';
  }
}
.task__controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding-left: 30px;
}
</style>
