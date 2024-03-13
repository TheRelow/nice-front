<script setup lang="ts">
import _ from "lodash";
import type { Folder, RootFolder } from "~/api/folder/types";
const emit = defineEmits(["change"]);
const props = withDefaults(
  defineProps<{
    list?: Folder[];
    isRoot?: boolean,
  }>(),
  {
    list() {
      return [];
    },
    isRoot: true,
  }
);

const folders = ref<(Folder | RootFolder)[]>([]);
watch(
  () => props.list,
  (val) => {
    console.log('val');
    
    if (props.isRoot) {
      folders.value = [
        {
          id: null,
          title: 'root',
          list: _.cloneDeep(val),
        }
      ]
    } else {
      folders.value = _.cloneDeep(val);
    }
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <ul class="folders-list">
    <FoldersListItem v-for="folder of folders" :key="folder.id || 'root'" :folder="folder" />
  </ul>
</template>
