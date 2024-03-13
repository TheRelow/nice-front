<script setup lang="ts">
definePageMeta({
  name: 'component_base-icon'
})

const check = ref(false)
</script>

<template>
  <h1>BaseIcon</h1>
  <BaseButton>
    <BaseIcon color="inherit"></BaseIcon>
    Search
  </BaseButton>
</template>
