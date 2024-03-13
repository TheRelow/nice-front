<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon?: string,
  color?: string
}>(), {
  icon: 'magnify',
  color: 'dark'
})

const classes = computed((): string => {
  let classList = ['icon', 'mdi']

  if (props.color !== 'dark') {
    classList.push(`icon_color_${props.color}`)
  }
  if (props.icon) {
    classList.push(`mdi-${props.icon}`)
  }

  return classList.join(' ')
})
</script>

<template>
  <span :class="classes"></span>
</template>
