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

<style scoped lang="scss">
.icon {
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1.5rem;
  color: $primary;
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.icon_color_light {
  color: $gray50;
}
.icon_color_accent {
  color: $accent;
}
.icon_color_gray {
  color: $gray800;
}

.icon_color_inherit {
  color: currentColor;
}
</style>
