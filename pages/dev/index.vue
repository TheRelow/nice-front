<script setup lang="ts">
definePageMeta({
  name: 'dev'
})
</script>

<template>
  <div>
    <h1>dev</h1>
    <BaseButtonsList>
      <BaseButton tag="nuxt-link" :to="{name: 'components'}">components</BaseButton>
      <BaseButton tag="nuxt-link" :to="{name: 'packages'}">packages</BaseButton>
    </BaseButtonsList>
    <v-switch label="Switch"></v-switch>
  </div>
</template>

<style scoped>

</style>
