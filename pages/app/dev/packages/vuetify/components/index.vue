<script setup lang="ts">
definePageMeta({
  name: 'package_vuetify-components'
})

const links = [
  {
    title: 'button',
    to: {
      name: 'package_vuetify-button'
    }
  },
  {
    title: 'form components',
    to: {
      name: 'package_vuetify-form-components'
    }
  },
]
</script>

<template>
  <h1>
    Components
  </h1>
  <BaseButtonsList>
    <BaseButton v-for="item of links" tag="nuxt-link" :to="item.to">
      {{ item.title }}
    </BaseButton>
  </BaseButtonsList>
</template>

<style scoped>

</style>
