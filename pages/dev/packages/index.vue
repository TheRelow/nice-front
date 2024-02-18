<template>
  <div>
    <h1>Packages</h1>
    <BaseButtonsList>
      <BaseButton v-for="item of baseComponents" tag="nuxt-link" :to="{name: `package_${item}`}">{{ item }}</BaseButton>
    </BaseButtonsList>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  name: 'packages'
})
const baseComponents = ['vuedraggable', 'vuetify', 'i18n', 'gsap', 'pinia', 'content', 'mdi']
</script>
