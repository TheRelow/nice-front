<template>
  <BaseOverlay v-model="model">
    <div class="popup">
      <slot></slot>
    </div>
  </BaseOverlay>
</template>

<script lang="ts" setup>
const model = defineModel()
</script>
