<template>
  <div>
    <h1>{{ folder?.title }}</h1>
    awdawdawd
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: 'folder'
})

const route = useRoute()

const folderId = ref<number>()
const folder = computed(() => {
  if (folderId.value) {
    return store.folder.getFolder(folderId.value)
  } else {
    return {
      title: '[erorr]: No folder'
    }
  }
})

folderId.value = +route.params.id
store.folder.loadFolder(folderId.value)
</script>
