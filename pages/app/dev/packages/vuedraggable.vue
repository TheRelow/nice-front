<script setup lang="ts">
import draggable from 'vuedraggable'

definePageMeta({
  name: 'package_vuedraggable'
})

const myArray = ref([
  {
    name: 'vue',
  },
  {
    name: 'nest',
  },
  {
    name: 'node',
  },
  {
    name: 'Rust',
  },
  {
    name: 'Go',
  },
])
const drag = ref(false)
</script>

<template>
  <div>
    <h1>VueDraggable</h1>
    <draggable
        v-model="myArray"
        group="people"
        @start="drag=true"
        @end="drag=false"
        item-key="name">
      <template #item="{element}">
        <div>{{element.name}}</div>
      </template>
    </draggable>
  </div>
</template>

<style scoped>

</style>
