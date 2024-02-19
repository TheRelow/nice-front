<template>
  <div>
    <h1>Components</h1>
    <h2>Base</h2>
    <BaseButtonsList>
      <BaseButton v-for="item of baseComponents" tag="nuxt-link" :to="{name: `component_base-${item}`}">{{ item }}</BaseButton>
    </BaseButtonsList>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  name: 'components'
})
const baseComponents = ['button', 'buttons-list', 'checkbox', 'icon', 'input']
</script>
