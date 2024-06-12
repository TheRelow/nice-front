<script setup lang="ts">
const emit = defineEmits(['edit', 'delete'])

const taskActions = [
  {
    title: "Add new folder",
    action: () => {
      createFolderId.value = props.folder.id;
    },
  },
  { title: "Edit", action: () => {} },
  { title: "Delete", action: () => store.folder.deleteFolder(props.folder.id) },
];

const props = defineProps<{
  id: number;
}>();

const task = computed(() => {
  return store.task.getTask(props.id);
});

function deleteTask() {
  emit('delete', task.id)
}

function startEditing() {
  emit('edit', task.id)
}

function toggleTaskStatus() {
  if (!task.value) return;
  store.task.updateTask(props.id, { isDone: !task.value.isDone });
}

function dragStart(event: any) {
  event.stopPropagation();
  startDrag(task.value, "task");
}
function dragEnd(e: any) {
  finishDrag();
}
</script>

<template>
  <base-context-menu :actions="taskActions" v-if="task">
    <template #activator="{ props }">
      <div
        class="task-list__item"
        draggable="true"
        @dragstart="dragStart"
        @dragend="dragEnd"
        v-bind="props"
      >
        <div class="task__check">
          <BaseCheckbox :model-value="task.isDone" @click="toggleTaskStatus" />
        </div>
        <div class="task__main">
          {{ task.title }}
          <div class="task__controls">
            <BaseIcon icon="cog" />
            <BaseIcon @click="startEditing" icon="pencil" />
          </div>
        </div>
      </div>
    </template>
  </base-context-menu>
  <div class="error-task" v-else>Задача не найдена</div>
</template>
