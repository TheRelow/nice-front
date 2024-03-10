import { ref, watch } from "vue";

export const isDrag = ref<boolean>(false);
export const dragElement = ref<any>(null);
export const dropTarget = ref<any>(null);

export const startDrag = (el: any, type: string) => {
  isDrag.value = true;
  dragElement.value = {el, type};
};
export const finishDrag = () => {
  isDrag.value = false;
};
export const setDropTarget = (el: any, type: string) => {
  dropTarget.value = {el, type};
}

watch(dropTarget, () => {  
  if (!dragElement.value?.el.id) return
  if (dropTarget.value?.el.id || dropTarget.value.el.id === null) {
    if (dragElement.value.type === "folder") {
      store.folder.updateFolder(dragElement.value.el.id, { parentId: dropTarget.value.el.id });
    }
    if (dragElement.value.type === "task") {
      store.task.updateTask(dragElement.value.el.id, { parentFolderId: dropTarget.value.el.id });
    }
  }
})
