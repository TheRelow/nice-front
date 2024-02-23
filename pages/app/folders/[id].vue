<template>
  <div>
    <h1>{{ folder?.title }}</h1>
    awdawdawd
  </div>
</template>

<script setup lang="ts">
import { useFolderStore } from '~/store/folderStore';

definePageMeta({
  name: 'folder'
})

const folderStore = useFolderStore()
const route = useRoute()

const folderId = ref<number>()
const folder = computed(() => {
  if (folderId.value) {
    return folderStore.getFolder(folderId.value)
  } else {
    return {
      title: '[erorr]: No folder'
    }
  }
})

folderId.value = +route.params.id
folderStore.loadFolder(folderId.value)
</script>