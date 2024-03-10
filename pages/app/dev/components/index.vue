<template>
  <h1>Components</h1>
  <h2>Base</h2>
  <BaseButtonsList>
    <BaseButton v-for="item of baseComponents" tag="nuxt-link" :to="{name: `component_base-${item}`}">{{ item }}</BaseButton>
  </BaseButtonsList>
  <h2>all</h2>
  <BaseButtonsList>
    <BaseButton v-for="item of allComponents" tag="nuxt-link" :to="{name: `component_${item}`}">{{ item }}</BaseButton>
  </BaseButtonsList>
</template>

<script lang="ts" setup>
definePageMeta({
  name: 'components'
})
const baseComponents = ['button', 'buttons-list', 'checkbox', 'icon', 'input']
const allComponents = ['folder-list']
</script>
