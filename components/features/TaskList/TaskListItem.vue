<script setup lang="ts">

const items = ref([{ title: "Delete", action: deleteTask }]);

const props = defineProps<{
  id: number;
}>();

const task = computed(() => {
  return store.task.getTask(props.id);
});

function deleteTask() {
  store.task.deleteTask(props.id);
}

const isEditing = ref(false);
const editingValue = ref();
function startEditing() {
  isEditing.value = true;
  if (task.value && !editingValue.value) {
    editingValue.value = task.value.title;
  }
}
function finishEditing() {
  isEditing.value = false;
  store.task.updateTask(props.id, { title: editingValue.value });
}
function cancelEditing() {
  isEditing.value = false;
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
  <div
    class="task-list__item"
    v-if="task"
    draggable="true"
    @dragstart="dragStart"
    @dragend="dragEnd"
  >
    <div class="task__check">
      <BaseCheckbox :model-value="task.isDone" @click="toggleTaskStatus" />
    </div>
    <div class="task__main">
      <template v-if="!isEditing">
        {{ task.title }}
      </template>
      <base-input v-else v-model="editingValue" />
      <div class="task__controls">
        <BaseIcon icon="cog" />
        <BaseIcon @click="startEditing" v-if="!isEditing" icon="pencil" />
        <template v-else>
          <BaseIcon @click="finishEditing" icon="check" />
          <BaseIcon @click="cancelEditing" icon="cancel" />
        </template>
      </div>
    </div>
  </div>
  <div class="error-task" v-else>Задача не найдена</div>
</template>
