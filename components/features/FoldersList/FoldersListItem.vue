<script setup lang="ts">
import type { Folder } from "./types";

const folderActions = [{ title: "Add new folder", action: () => {} }];

const props = defineProps<{
  folder: Folder;
}>();

const emit = defineEmits(["change"]);

const isOpened = ref(false);
const dragTarget = ref(false);

const isEmpty = computed(() => {
  return props.folder.id !== null && props.folder.list.length === 0;
});

function collapseToggle(e: any) {
  if (e) {
    e.stopPropagation();
  }
  isOpened.value = !isOpened.value;
}

const isDropPlace = computed(() => {
  if (!isDrag.value) return false;
  if (dragElement.value.type === "task") return true;
  if (dragElement.value?.el.id === props.folder.id) return false;
  if (dragElement.value.el.parentId === props.folder.id) return false;
  if (dragElement.value.el.nestedElementIds.includes(props.folder.id))
    return false;
  return true;
});

function dragStart(event: any) {
  event.stopPropagation();
  startDrag(props.folder, "folder");

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
  setDropTarget(props.folder, "folder");
  dragTarget.value = false;
}
</script>

<template>
  <li class="folders-list__item">
    <div
      class="folders-list__item-content"
      :class="{
        'folders-list__item-content_drag-target': dragTarget,
        opened: store.folder.activeFolder === props.folder.id,
      }"
      @dragstart="dragStart"
      @dragend="dragEnd"
      :draggable="props.folder.id ? true : false"
      @click="store.folder.goToFolder(props.folder.id)"
    >
      <BaseIcon
        class="folders-list__item-control folders-list__item-collapse"
        :class="{
          active: isOpened,
          hidden: isEmpty,
        }"
        color="inherit"
        icon="menu-down"
        @click="collapseToggle"
      ></BaseIcon>
      <BaseIcon
        class="folders-list__item-folder"
        color="inherit"
        :icon="isOpened && !isEmpty ? 'folder-open' : 'folder'"
      ></BaseIcon>
      <div class="folders-list__item-content-title">
        {{ folder.title }}
      </div>
      <BaseIcon
        class="folders-list__item-settings folders-list__item-control"
        color="inherit"
        icon="dots-horizontal"
      ></BaseIcon>
    </div>
    <div
      class="folders-list__item-drag-handler"
      :class="{active: isDropPlace}"
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
  display: none;
  z-index: 1;
  content: "";
  &.active {
    display: block;
  }
}
.folders-list__item-content {
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px 18px;
  border-radius: 4px;
  border: 1px solid transparent;
  overflow: hidden;
  cursor: pointer;
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
  &.opened {
    background-color: $light300;
  }
}
.folders-list__item-control {
  flex: none;
  transition: 0.15s;
  border-radius: 50%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
.folders-list__item-collapse {
  margin: 0 2px 0 -10px;
  &.active {
    transform: rotate(-90deg);
  }
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
}
.folders-list__item-folder {
  margin-right: 6px;
}
.folders-list__item-content-controls {
  display: none;
}
.folders-list__item-content-folder-structure {
  width: 50px;
}
.folders-list__item-content-title {
  position: relative;
  flex: 1 1 auto;
  white-space: nowrap;
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 1;
}
.folders-list__item-settings {
  display: none;
  &.active {
    display: block;
  }
}
.folders-list__item-content:hover {
  .folders-list__item-settings {
    display: block;
  }
}
</style>
