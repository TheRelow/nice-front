<script setup lang="ts">
import type {Folder} from "~/api/folder/types";

const props = withDefaults(defineProps<{
  tasks: Folder[]
}>(), {
  tasks() {
    return []
  },
})
</script>

<template>
  <ul class="folders-list">
    <li class="folders-list__item">
      <BaseIcon color="inherit" icon="folder"></BaseIcon>
      Work
    </li>
    <li class="folders-list__item">
      <BaseIcon color="inherit" icon="folder"></BaseIcon>
      Today
    </li>
    <li class="folders-list__item">
      <BaseIcon color="inherit" icon="folder"></BaseIcon>
      This week
    </li>
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
  color: $gray500;

  &:hover {
    background-color: $light200
  }
}
</style>