<script setup lang="ts">
definePageMeta({
  name: 'dev'
})
</script>

<template>
  <h1>dev</h1>
  <BaseButtonsList>
    <BaseButton tag="nuxt-link" :to="{name: 'components'}">{{ $t('Components') }}</BaseButton>
    <BaseButton tag="nuxt-link" :to="{name: 'packages'}">{{ $t('Packages') }}</BaseButton>
  </BaseButtonsList>
  <v-switch label="Switch"></v-switch>
</template>

<style scoped>

</style>
