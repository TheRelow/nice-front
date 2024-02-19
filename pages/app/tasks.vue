<script setup lang="ts">
</script>

<template>
  <div class="task-section">
    <div class="task-section__settings">
      <FoldersList style="margin: 0 -18px;"></FoldersList>
    </div>
    <NuxtPage />
  </div>
</template>

<style scoped lang="scss">
.task-section {
  display: flex;
  width: 100%;
}
.task-section__settings {
  width: 320px;
  height: 100%;
  background-color: $light100;
  padding: 12px 18px;
}
</style>
