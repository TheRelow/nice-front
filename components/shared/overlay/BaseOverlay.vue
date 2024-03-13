<template>
  <Teleport to="body" v-if="model">
    <div class="overlay" @click="overlayClickHandler">
      <slot />
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
// const id = getCurrentInstance().uid
// testOverlay.value = id
const model = defineModel()

function overlayClickHandler(e: any) {
  e.stopPropagation()
  model.value = false
}
</script>
