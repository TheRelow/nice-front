<script setup lang="ts">
definePageMeta({
  name: 'folders'
})

const folders = [
  { id: 1, title: "Work" },
  { id: 2, title: "Personal" },
  { id: 3, title: "Programming" },
  { id: 4, title: "Documents" },
  { id: 5, title: "Photos" },
  { id: 6, title: "Music" },
  { id: 7, title: "Videos" },
  { id: 8, title: "Downloads" },
  { id: 9, title: "Archive" }
];
</script>

<template>
  <div class="folders-section">
    <div class="folders-section__item folders-section__item_first">
      <div class="folders-grid-list">
        <div class="folders-grid-list__item" v-for="folder of folders" :key="folder.id">
          <BaseIcon icon="folder" color="inherit" />
          {{ folder.title }}
        </div>
      </div>
    </div>
    <div class="folders-section__item"></div>
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
}
.folders-grid-list {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 24px;
  align-items: flex-start;
}
.folders-grid-list__item {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 60px;
  padding: 8px 18px;
  background-color: $light200;
  border-radius: 24px;
  color: $gray600;
}
</style>