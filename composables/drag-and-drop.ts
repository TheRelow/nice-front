import { ref } from 'vue';

export const isDrag = ref(false)

export const startDrag = () => isDrag.value = true;
export const finishDrag = () => isDrag.value = false;
