import type {Task} from "~/api/task/types";

export const taskApi = {
  async findAll(): Promise<Task[]> {
    try {
      return await $fetch('http://localhost:5000/tasks');
    } catch (error) {
      console.error('Произошла ошибка:', error);
      throw error;
    }
  },
  async create(title: string): Promise<Task> {
    try {
      return await $fetch('http://localhost:5000/tasks', {
        method: 'POST',
        body: {title}
      });
    } catch (error) {
      console.error('Произошла ошибка:', error);
      throw error;
    }
  },
  async findOne(id: number): Promise<Task> {
    try {
      return await $fetch(`http://localhost:5000/tasks/${id}`);
    } catch (error) {
      console.error('Произошла ошибка:', error);
      throw error;
    }
  },
  async update(id: number, data: Partial<Task>): Promise<Task> {
    try {
      return await $fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PATCH',
        body: data
      });
    } catch (error) {
      console.error('Произошла ошибка:', error);
      throw error;
    }
  },
  async remove(id: number) {
    try {
      return await $fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'delete'
      });
    } catch (error) {
      console.error('Произошла ошибка:', error);
      throw error;
    }
  },
}
