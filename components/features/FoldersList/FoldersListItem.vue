<script setup lang="ts">
import type { Folder } from "./types"

const props = defineProps<{
  folder: Folder,
}>()

const emit = defineEmits(['change'])

const isOpened = ref(false)

const change = (e:any) => {
  emit('change', { parentId: props.folder.id, ...e })
}
</script>

<template>
  <li class="folders-list__item">
    <div class="folders-list__item-content" @click="isOpened = !isOpened">
      <BaseIcon color="inherit" :icon="isOpened ? 'folder-open' : 'folder'"></BaseIcon>
      {{ folder.title }}
    </div>
    <FoldersList :list="folder.list" :is-root="false" :folderId="folder.id" @change="change" />
  </li>
</template>

<style scoped lang="scss">
.folders-list__item.sortable-drag {
  opacity: 0.2;
}
.folders-list__item-content {
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px 18px;
  gap: 12px;
  cursor: default;
  // z-index: 1;

  &:hover {
    background-color: $light200
  }
}
</style>
