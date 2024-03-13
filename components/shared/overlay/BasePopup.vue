<template>
  <BaseOverlay v-model="model">
    <div :class="`popup ${props.class}`" @click="$event.stopPropagation()">
      <slot></slot>
    </div>
  </BaseOverlay>
</template>

<script lang="ts" setup>
const emit = defineEmits(['closed'])
const props = defineProps<{
  class: string
}>()
const model = defineModel()

watch(model, (val) => {
  if (val === false) emit('closed')
})
</script>
