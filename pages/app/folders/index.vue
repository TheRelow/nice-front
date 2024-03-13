<script setup lang="ts">
definePageMeta({
  name: 'folders'
})

const folderList = computed(() => store.folder.folderList)
</script>

<template>
  <div class="folders-section">
    <div class="folders-section__item folders-section__item_first">
      <div class="folders-grid-list">
        <NuxtLink :to="{ name: 'folder', params: { id: folder.id } }" class="folders-grid-list__item" v-for="folder of folderList" :key="folder.id">
          <BaseIcon icon="folder" color="inherit" />
          {{ folder.title }}
        </NuxtLink>
      </div>
    </div>
    <div class="folders-section__item" style="background-color: rga(255, 255, 255);"></div>
    <div class="folders-section__item"></div>
    <div class="folders-section__item"></div>
    <div class="folders-section__item"></div>
    <div class="folders-section__item"></div>
  </div>
</template>
