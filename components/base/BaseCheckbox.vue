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

<style scoped lang="scss">
.base-checkbox {
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid $gray300;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s;
  &:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url('~/assets/icons/ok.svg');
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: 0.2s;
    content: '';
  }
  &.active {
    border-color: $primary;
    &:before {
      background-color: $primary;
      opacity: 1;
    }
  }
}
</style>
