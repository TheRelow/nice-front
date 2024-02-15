<template>
  <div>
    <h1>Components</h1>
    <h2>Base</h2>
    <div class="buttons">
      <BaseButton v-for="item of baseComponents" tag="nuxt-link" :to="{name: `component_base-${item}`}">{{ item }}</BaseButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  name: 'components'
})
const baseComponents = ['button', 'checkbox', 'icon', 'input']
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  gap: 12px;
}
</style>
