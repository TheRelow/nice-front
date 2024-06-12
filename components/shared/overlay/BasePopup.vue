<template>
  <teleport to="body">

  </teleport>
</template>

<script lang="ts" setup>
const emit = defineEmits(['closed'])
const props = withDefaults(defineProps<{
  target: string,
  assignTo: string,
  position: string,
  width: string,
  minWidth: string,
  maxWidth: string,
  height: string,
  minHeight: string,
  maxHeight: string,
  openBy: string,
  offset: number,
  screenOffset: [number, number, number, number],
  autoClose: boolean,
  followCursor: boolean,
}>(), {

})
const model = defineModel()

watch(model, (val: boolean) => {
  if (!val) emit('closed')
})
</script>
