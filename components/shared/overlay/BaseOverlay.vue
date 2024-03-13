<template>
  <Teleport to="body">
    <div class="overlay">
      <slot />
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
// const id = getCurrentInstance().uid
// testOverlay.value = id
</script>
