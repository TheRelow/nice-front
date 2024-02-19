<script setup lang="ts">
definePageMeta({
  name: 'package_vuetify-select'
})
</script>

<template>
  <div>
    <h1>Select</h1>
    <v-select
        label="Select"
        :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    ></v-select>
  </div>
</template>

<style scoped>

</style>