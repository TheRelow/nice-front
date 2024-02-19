import {defineStore} from 'pinia'
import type {Task} from "~/api/task/types";
import {taskApi} from "~/api/task";
import {useCrudApi} from "~/store/generic-crud";

export const useTaskStore = defineStore('task', () => {
  const taskList = ref<Task[]>([])

  const crudApi = useCrudApi<Task>(taskList, taskApi)

  const loadAllTasks = crudApi.loadAllResources
  const createTask = crudApi.createResource
  const updateTask = crudApi.updateResource
  const deleteTask = crudApi.deleteResource
  const getTask = crudApi.getResource

  return {taskList, loadAllTasks, createTask, getTask, updateTask, deleteTask}
})
