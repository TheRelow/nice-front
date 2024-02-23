<script lang="ts">
interface event {
  element: {
    id: number,
  },
  newIndex?: number,
  oldIndex?: number,
}
interface change {
  parentId?: number,
  moved?: event,
  removed?: event,
  added?: event,
}
</script>

<script setup lang="ts">
import draggable from 'vuedraggable'
import type {Folder} from "~/api/folder/types";
const emit = defineEmits(['change'])
const props = withDefaults(defineProps<{
  list?: Folder[],
  isRoot?: boolean,
}>(), {
  list() {
    return []
  },
  isRoot: true,
})

const changes = ref<change[]>([])
const events = ref([])

const change = (params: change) => {
  if (props.isRoot) {
    changes.value.push(params)
  } else {
    emit('change', params)
  }
}

function changeHandling(changeList: change[]) {

}

let timeout: ReturnType<typeof setTimeout>
watch(changes, (val) => {
  if (timeout) clearTimeout(timeout)
  timeout = setTimeout(() => {
    console.log('changes', val);
  }, 200)
}, { deep: true })
</script>

<template>
  <draggable
      :list="props.list"
      item-key="id"
      group="folders"
      tag="ul"
      class="folders-list"
      @change="change">
    <template #item="{element: folder}">
      <FoldersListItem :folder="folder" @change="change" />
    </template>
  </draggable>
</template>

<style scoped lang="scss">
.folders-list {
  min-height: 32px;
  list-style: none;
  .folders-list {
    padding-left: 15px;
    background-color: rgba(0,0,0,0.05);
  }
}
</style>