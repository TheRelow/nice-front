<script setup lang="ts">
import { useFolderStore } from '~/store/folderStore';

definePageMeta({
  name: 'folders'
})

const foldersStore = useFolderStore()
const folderList = computed(() => foldersStore.folderList)
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

<style scoped lang="scss">
.folders-section {
  display: grid;
  grid-template-columns: repeat(3, minmax(240px, 50%));
  grid-gap: 24px;
  width: 100%;
  height: 100%;
  background-color: $light50;
  padding: 32px;
}
.folders-section__item {
  background-color: $light100;
  border-radius: 24px;
}
.folders-section__item_first {
  grid-column: 1/3;
  padding: 24px;
}
.folders-grid-list {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  flex-wrap: wrap;
}
.folders-grid-list__item {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 8px 18px;
  background-color: $light200;
  border-radius: 24px;
  color: $gray600;
}
</style>