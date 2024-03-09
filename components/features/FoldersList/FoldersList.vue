<script lang="ts">
interface event {
  element: {
    id: number;
  };
  newIndex?: number;
  oldIndex?: number;
}
interface change {
  parentId?: number;
  moved?: event;
  removed?: event;
  added?: event;
}
</script>

<script setup lang="ts">
import _ from "lodash";
import { isDrag, startDrag, finishDrag } from '@/composables/drag-and-drop';

import draggable from "vuedraggable";
import type { Folder } from "~/api/folder/types";
const emit = defineEmits(["change"]);
const props = withDefaults(
  defineProps<{
    list?: Folder[];
    isRoot?: boolean;
    folderId?: number | null;
  }>(),
  {
    list() {
      return [];
    },
    isRoot: true,
    folderId: null,
  }
);

const changes = ref<change[]>([]);
const events = ref([]);
const folders = ref<Folder[]>([]);

function onMove(evt: any) {
  console.log("move evt", evt);
  return false
}

function onDragMove(evt: any) {
  console.log("onDragMove evt", evt);
  // return false
}

function onEnd(evt: any) {
  console.log("end evt", evt);
  finishDrag()
}

function onStart() {
  startDrag()
}

const change = (params: change) => {
  if (props.isRoot) {
    changes.value.push(params);
  } else {
    emit("change", params);
  }
};

function changeHandling(changeList: change[]) {
  changeList.forEach((change) => {
    if (change.added) {
      emit("change", {
        el: change.added.element.id,
        to: change.parentId || null,
      });
    }
  });
}

let timeout: ReturnType<typeof setTimeout>;
watch(
  changes,
  (val) => {
    if (changes.value.length === 0) return;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      changeHandling(_.cloneDeep(val));
      changes.value = [];
    }, 50);
  },
  { deep: true }
);

watch(
  () => props.list,
  (val) => {
    folders.value = _.cloneDeep(val);
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <draggable
    :list="folders"
    item-key="id"
    group="folders"
    tag="ul"
    :sort="false"
    :folderId="folderId"
    class="folders-list"
    :class="{'folders-list_root': isRoot, 'folders-list_dragging': isDrag}"
    @change="change"
    :move="onMove"
    :onEnd="onEnd"
    :onStart="onStart"
    :onDragMove="onDragMove"
  >
    <template #item="{ element: folder }">
      <FoldersListItem :folder="folder" @change="change" />
    </template>
  </draggable>
</template>

<style scoped lang="scss">
.folders-list {
  min-height: 32px;
  list-style: none;
  &_root {
    padding: 20px 0;
  }
  &_dragging {
    border: dashed 1px red;
  }
  .folders-list {
    margin-top: -32px;
    padding-top: 32px;
    padding-left: 15px;
  }
}
</style>
