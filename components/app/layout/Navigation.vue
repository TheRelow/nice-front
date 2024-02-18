<script setup lang="ts">
const props = defineProps<{
  items: []
}>()
const navAppSettings = ref()
</script>

<template>
  <ul>
    <li v-for="item of navAppSettings" class="navigation__item">
      <NuxtLink :to="item.to" class="navigation__link">
        <BaseIcon color="inherit" :icon="item.icon" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>

</style>