<template>
  <slot name="activator" :props="{ onClick: activatorHandler }"></slot>
  <base-overlay v-model="isOpened">
    <div class="context-menu" :style="position" @click="$event.stopPropagation()">
      <div class="context-menu__item" v-for="action of props.actions" @click="executeAction(action.action)">
        {{ action.title }}
      </div>
    </div>
  </base-overlay>
</template>

<script setup lang="ts">
interface Action {
  title: string;
  action: () => void;
}

const props = defineProps<{
  actions: Action[];
}>();

const isOpened = ref(false);
const position = ref({
  left: '',
  top: '',
});

function activatorHandler(e: any) {
  e.stopPropagation();
  position.value = {
    left: e.clientX + 'px',
    top: e.clientY + 'px',
  }
  isOpened.value = true;
}

function executeAction(action: () => void) {
  action()
  isOpened.value = false
}
</script>
