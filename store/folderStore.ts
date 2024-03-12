import {defineStore} from 'pinia'
import type {Folder} from "~/api/folder/types";
import {folderApi} from "~/api/folder";
import {useCrudApi} from "~/store/generic-crud";
import generateNesting from '@/helpers/generateNesting';

export const useFolderStore = defineStore('fileSystem', () => {
  const folderList = ref<Folder[]>([])
  const activeFolder = ref<number | null>()

  const folderListWithNesting = computed(() => {
    return generateNesting(folderList.value)
  })

  const goToFolder = (id: number | null) => {
    activeFolder.value = id
  }

  const crudApi = useCrudApi<Folder>(folderList, folderApi)
  const loadAllFolders = crudApi.loadAllResources
  const loadFolder = crudApi.loadResource
  const createFolder = crudApi.createResource
  const updateFolder = crudApi.updateResource
  const deleteFolder = crudApi.deleteResource
  const getFolder = crudApi.getResource

  return {folderList, activeFolder, folderListWithNesting, loadAllFolders, loadFolder, createFolder, getFolder, updateFolder, deleteFolder, goToFolder}
})
