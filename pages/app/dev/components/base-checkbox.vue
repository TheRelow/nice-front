<script setup lang="ts">
definePageMeta({
  name: 'component_base-checkbox'
})

const check = ref(false)
</script>

<template>
  <h1>BaseCheckbox</h1>
  <BaseCheckbox v-model="check"></BaseCheckbox>
</template>

<style scoped>

</style>
