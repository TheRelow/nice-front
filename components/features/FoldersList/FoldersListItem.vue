<script setup lang="ts">
interface Folder {
  id: number,
  title: string,
  list?: Folder[],
}

const props = defineProps<{
  folder: Folder
}>()

const emit = defineEmits(['change'])

const isOpened = ref(false)

const change = (e:any) => {
  emit('change', { parentId: props.folder.id, ...e })
}
</script>

<template>
  <li class="folders-list__item">
    <div class="folders-list__item-content" @click="isOpened = !isOpened">
      <BaseIcon color="inherit" :icon="isOpened ? 'folder-open' : 'folder'"></BaseIcon>
      {{ folder.title }}
    </div>
    <FoldersList v-if="isOpened" :list="folder.list" :is-root="false" @change="change" />
  </li>
</template>

<style scoped lang="scss">
.folders-list__item-content {
  display: flex;
  align-items: center;
  padding: 4px 18px;
  gap: 12px;
  cursor: default;

  &:hover {
    background-color: $light200
  }
}
</style>