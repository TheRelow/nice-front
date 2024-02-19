import {defineStore} from 'pinia'
import type {Folder} from "~/api/folder/types";
import {folderApi} from "~/api/folder";
import {useCrudApi} from "~/store/generic-crud";

export const useFolderStore = defineStore('fileSystem', () => {
  const folderList = ref<Folder[]>([])

  const crudApi = useCrudApi<Folder>(folderList, folderApi)

  const loadAllFolders = crudApi.loadAllResources
  const createFolder = crudApi.createResource
  const updateFolder = crudApi.updateResource
  const deleteFolder = crudApi.deleteResource
  const getFolder = crudApi.getResource

  return {folderList, loadAllFolders, createFolder, getFolder, updateFolder, deleteFolder}
})
