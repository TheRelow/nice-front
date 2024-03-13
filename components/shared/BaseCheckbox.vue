<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
const props = withDefaults(defineProps<{
  modelValue: boolean
}>(), {
  modelValue: false
})

function check() {
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <div class="base-checkbox" :class="{active: props.modelValue}" @click="check">

  </div>
</template>
