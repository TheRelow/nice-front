<script setup lang="ts">
definePageMeta({
  name: 'package_vuetify'
})

const links = [
  {
    title: 'components',
    to: {
      name: 'package_vuetify-components'
    }
  },
  {
    title: 'vuetify-nuxt-module',
    to: {
      name: 'package_vuetify-nuxt-module'
    }
  },
]
</script>

<template>
  <div>
    <h1>Vuetify</h1>
    <BaseButtonsList>
      <BaseButton v-for="item of links" tag="nuxt-link" :to="item.to">
        {{ item.title }}
      </BaseButton>
    </BaseButtonsList>
  </div>
</template>

<style scoped>

</style>