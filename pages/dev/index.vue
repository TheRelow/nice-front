<script setup lang="ts">
definePageMeta({
  name: 'dev'
})
</script>

<template>
    <div>
        <h1>dev</h1>
        <BaseButton tag="nuxt-link" :to="{name: 'components'}">components</BaseButton>
    </div>
</template>

<style scoped>

</style>
