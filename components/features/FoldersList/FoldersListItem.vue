<script setup lang="ts">
import type {Folder} from "~/api/folder/types";

const props = withDefaults(defineProps<{
  folder?: Folder
}>(), {
  folder: {
    title: 'Title',
    id: 1
  },
})
</script>

<template>
  <li class="folders-list__item">
    <BaseIcon color="inherit" icon="folder"></BaseIcon>
    Work
  </li>
</template>

<style scoped>

</style>