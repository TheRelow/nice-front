<script setup lang="ts">
import type {Folder} from "~/api/folder/types";

const props = withDefaults(defineProps<{
  folders: Folder[]
}>(), {
  folders() {
    return [
      { id: 1, title: "Work" },
      { id: 2, title: "Personal" },
      { id: 3, title: "Programming" },
      { id: 4, title: "Documents" },
      { id: 5, title: "Photos" },
      { id: 6, title: "Music" },
      { id: 7, title: "Videos" },
      { id: 8, title: "Downloads" },
      { id: 9, title: "Archive" }
    ]
  },
})
</script>

<template>
  <ul class="folders-list">
    <FoldersListItem v-for="folder of props.folders" :key="folder.id" :folder="folder" />
  </ul>
</template>

<style scoped lang="scss">
.folders-list {

}

.folders-list__item {
  display: flex;
  align-items: center;
  padding: 4px 18px;
  gap: 12px;

  &:hover {
    background-color: $light200
  }
}
</style>