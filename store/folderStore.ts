import {defineStore} from 'pinia'
import type {Folder} from "~/api/folder/types";
import {folderApi} from "~/api/folder";
import {useCrudApi} from "~/store/generic-crud";
import generateNesting from '@/helpers/generateNesting';

export const useFolderStore = defineStore('fileSystem', () => {
  const folderList = ref<Folder[]>([])

  const folderListWithNesting = computed(() => {
    return generateNesting(folderList.value)
  })

  const activeFolderId = ref<number | null>()
  const activeFolder = computed<Folder | null>(() => {
    const idx = folderList.value.findIndex((f: Folder) => f.id === activeFolderId.value)
    if (idx !== -1) return folderList.value[idx]
    return null;
  })
  const activeFolderTitle = computed<Folder | null>(() => activeFolder.value ? activeFolder.value.title : 'root')
  const goToFolder = (id: number | null) => {
    activeFolderId.value = id
  }

  const crudApi = useCrudApi<Folder>(folderList, folderApi)
  const loadAllFolders = crudApi.loadAllResources
  const loadFolder = crudApi.loadResource
  const createFolder = crudApi.createResource
  const updateFolder = crudApi.updateResource
  const deleteFolder = crudApi.deleteResource
  const getFolder = crudApi.getResource

  return {folderList, activeFolderId, activeFolder, activeFolderTitle, folderListWithNesting, loadAllFolders, loadFolder, createFolder, getFolder, updateFolder, deleteFolder, goToFolder}
})
