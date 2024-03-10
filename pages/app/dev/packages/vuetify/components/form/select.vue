<script setup lang="ts">
definePageMeta({
  name: 'package_vuetify-select'
})
</script>

<template>
  <h1>Select</h1>
  <v-select
      label="Select"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  ></v-select>
</template>

<style scoped>

</style>
