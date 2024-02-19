<script setup lang="ts">
// import type {Folder} from "~/api/folder/types";

interface Folder {
  id: number,
  title: string,
}

const props = withDefaults(defineProps<{
  folder?: Folder
}>(), {
  folder: () => ({
    id: 1,
    title: 'Title',
  }),
})
</script>

<template>
  <li class="folders-list__item">
    <BaseIcon color="inherit" icon="folder"></BaseIcon>
    {{ folder.title }}
  </li>
</template>

<style scoped>

</style>