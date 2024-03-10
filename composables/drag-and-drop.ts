import { ref, watch } from "vue";

import { useFolderStore } from "~/store/folderStore";
const folderStore = useFolderStore();

export const isDrag = ref<boolean>(false);
export const dragElement = ref<any>(null);
export const dropTarget = ref<any>(null);

export const startDrag = (el: any) => {
  isDrag.value = true;
  dragElement.value = el;
};
export const finishDrag = () => {
  isDrag.value = false;
  // dragElement.value = null;
};
export const setDropTarget = (target: any) => {
  dropTarget.value = target
}

watch(dropTarget, () => {
  console.log('dropped');
  console.log('dragElement.value', dragElement.value);
  console.log('dropTarget.value', dropTarget.value);
  
  if (!dragElement.value?.id) return
  if (dropTarget.value?.id || dropTarget.value.id === null) {
    folderStore.updateFolder(dragElement.value.id, { parentId: dropTarget.value.id });
  }
})
watch(dragElement, (val) => {
  console.log(val);
})
