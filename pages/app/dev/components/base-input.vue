<script setup lang="ts">
definePageMeta({
  name: 'component_base-input'
})

const inputValue = ref('')
</script>

<template>
  <h1>BaseInput</h1>
  <BaseInput v-model="inputValue"></BaseInput>
</template>
