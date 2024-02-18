<script setup lang="ts">
definePageMeta({
  name: 'package_vuetify-form-components'
})

const links = [
  {
    title: 'input',
    to: {
      name: 'package_vuetify-input'
    }
  },
  {
    title: 'radio',
    to: {
      name: 'package_vuetify-radio'
    }
  },
  {
    title: 'select',
    to: {
      name: 'package_vuetify-select'
    }
  },
  {
    title: 'checkbox',
    to: {
      name: 'package_vuetify-checkbox'
    }
  },
]
</script>

<template>
  <div>
    <h1>From components</h1>
    <BaseButtonsList>
      <BaseButton v-for="item of links" tag="nuxt-link" :to="item.to">
        {{ item.title }}
      </BaseButton>
    </BaseButtonsList>
  </div>
</template>

<style scoped>

</style>