<script setup lang="ts">
import {
  isDrag,
  dragElement,
  startDrag,
  finishDrag,
  setDropTarget,
} from "@/composables/drag-and-drop";
import type { Folder } from "./types";

const props = defineProps<{
  folder: Folder;
}>();

const emit = defineEmits(["change"]);

const isOpened = ref(false);

const dragTarget = ref(false);

const isDropPlace = computed(() => {
  let result = (
    isDrag.value &&
    dragElement.value?.id !== props.folder.id &&
    dragElement.value.parentId !== props.folder.id &&
    !dragElement.value.nestedElementIds.includes(props.folder.id)
  )
  return result;
});

function dragStart(event: any) {
  event.stopPropagation();
  startDrag(props.folder);

  const clone = event.target.cloneNode(true);
  clone.classList.add("dragging");
  clone.style.width = `${event.target.offsetWidth}px`;

  document.body.appendChild(clone);
  event.dataTransfer.setDragImage(clone, 0, 0);
}
function dragEnd(e: any) {
  finishDrag();
}

function dragenter(event: any) {
  dragTarget.value = true;
}
function dragleave(event: any) {
  dragTarget.value = false;
}
function drop(event: any) {
  event.preventDefault();
  setDropTarget(props.folder);
  dragTarget.value = false;
}
</script>

<template>
  <li class="folders-list__item">
    <div
      class="folders-list__item-content"
      :class="{ 'folders-list__item-content_drag-target': dragTarget }"
      @dragstart="dragStart"
      @dragend="dragEnd"
      draggable="true"
      @click="isOpened = !isOpened"
    >
      <BaseIcon
        color="inherit"
        :icon="isOpened ? 'folder-open' : 'folder'"
      ></BaseIcon>
      {{ folder.title }}
    </div>
    <div
      class="folders-list__item-drag-handler"
      v-if="isDropPlace"
      ondragover="event.preventDefault()"
      @drop="drop"
      @dragenter="dragenter"
      @dragleave="dragleave"
    ></div>
    <FoldersList :list="folder.list" :isRoot="false" v-if="isOpened" />
  </li>
</template>

<style scoped lang="scss">
.folders-list__item {
  position: relative;
}
.folders-list__item-drag-handler {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: "";
}
.folders-list__item-content {
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px 18px;
  gap: 12px;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: default;
  &.dragging {
    width: auto;
    opacity: 0.35;
    background-color: #fff;
    border: 1px solid #000;
  }
  &:hover {
    background-color: $light200;
  }
  &_drag-target {
    border: 1px solid #000;
  }
}
</style>
