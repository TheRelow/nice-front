<template>
  <h1>{{ $t('Packages') }}</h1>
  <BaseButtonsList>
    <BaseButton v-for="item of baseComponents" tag="nuxt-link" :to="{name: `package_${item}`}">{{ item }}</BaseButton>
  </BaseButtonsList>
</template>

<script lang="ts" setup>
definePageMeta({
  name: 'packages'
})
const baseComponents = ['i18n', 'gsap', 'pinia', 'content', 'mdi']
</script>
