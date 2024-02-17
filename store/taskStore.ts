import {defineStore} from 'pinia'
import {syncRefWithLocalStorage} from "./local-storage-sync";

import type {Task} from "~/api/task/types";
import {taskApi} from "~/api/task";

export const useTaskStore = defineStore('task', () => {
  // const taskList = syncRefWithLocalStorage('taskList', [], {deep: true})
  const taskList = ref<Task[]>([])

  // Actions
  const loadAllTasks = async (): Promise<Task[]> => {
    try {
      const tasks = await taskApi.findAll();
      taskList.value = tasks
      return tasks;
    } catch (error) {
      console.error('Произошла ошибка при создании задачи:', error);
      throw error;
    }
  }
  const createTask = async (title: string): Promise<Task> => {
    try {
      const task = await taskApi.create(title);
      taskList.value.push(task);
      return task;
    } catch (error) {
      console.error('Произошла ошибка при создании задачи:', error);
      throw error;
    }
  }
  async function updateTask(id: number, data: Partial<Task>) {
    let beforeEdit = null
    const idx = taskList.value.findIndex((el: Task) => el.id === id)

    if (idx !== -1) {
      beforeEdit = taskList.value[idx]
      taskList.value[idx] = {...beforeEdit, ...data}
    }

    try {
      const task = await taskApi.update(id, data);
      if (idx !== -1) {
        taskList.value[idx] = task
      } else {
        taskList.value.push(task)
      }
      return task
    } catch (error) {
      if (beforeEdit !== null) {
        taskList.value[idx] = beforeEdit
      }
      console.error('Произошла ошибка при изменении задачи:', error);
      throw error;
    }
  }
  async function deleteTask(id: number) {
    let deletedTask = null
    const idx = taskList.value.findIndex((el: Task) => el.id === id)

    if (idx !== -1) {
      deletedTask = taskList.value.splice(idx , 1)[0]
    }

    try {
      return await taskApi.remove(id);
    } catch (error) {
      if (deletedTask !== null) {
        taskList.value.splice(idx , 0, deletedTask)
      }
      console.error('Произошла ошибка при изменении задачи:', error);
      throw error;
    }
  }

  // Getters
  function getTask(id: number): Task | undefined {
    const task = taskList.value.find((el: Task) => el.id === id)
    return task || undefined
  }

  return {taskList, loadAllTasks, createTask, getTask, updateTask, deleteTask}
})
