<script setup lang="ts">
import type { Folder } from "./types";

const folderActions = [
  {
    title: "Add new folder",
    action: () => {
      createFolderId.value = props.folder.id;
    },
  },
  { title: "Edit", action: () => {} },
];

const props = defineProps<{
  folder: Folder;
}>();

const emit = defineEmits(["change"]);

const isOpened = ref(false);
const dragTarget = ref(false);

const createFolderId = ref<number | false | null>(false);
const isCreateFolderOpened = computed<boolean>({
  get() {
    return createFolderId.value !== false;
  },
  set(val) {
    if (val === false) createFolderId.value = false;
  },
});
const createFolderTitle = ref('')
function createFolder() {
  store.folder.
  console.log(`create folder [${createFolderTitle.value}] in ${createFolderId.value}`);
  createFolderId.value = false
  createFolderTitle.value = ''
}

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
      <base-context-menu :actions="folderActions">
        <template #activator="{ props }">
          <BaseIcon
            class="folders-list__item-settings folders-list__item-control"
            color="inherit"
            icon="dots-horizontal"
            v-bind="props"
          ></BaseIcon>
        </template>
      </base-context-menu>
    </div>
    <div
      class="folders-list__item-drag-handler"
      :class="{ active: isDropPlace }"
      ondragover="event.preventDefault()"
      @drop="drop"
      @dragenter="dragenter"
      @dragleave="dragleave"
    ></div>
    <FoldersList :list="folder.list" :isRoot="false" v-if="isOpened" />
    <base-popup class="create-folder-popup" v-model="isCreateFolderOpened">
      <base-input v-model="createFolderTitle" />
      <base-button @click="createFolder">create</base-button>
    </base-popup>
  </li>
</template>
