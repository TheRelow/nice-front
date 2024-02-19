import type {Folder} from "./types";

export const folderApi = {
  async findAll(): Promise<Folder[]> {
    try {
      return await $fetch('http://localhost:5000/folders');
    } catch (error) {
      console.error('Произошла ошибка:', error);
      throw error;
    }
  },
  async create(title: string): Promise<Folder> {
    try {
      return await $fetch('http://localhost:5000/folders', {
        method: 'POST',
        body: {title}
      });
    } catch (error) {
      console.error('Произошла ошибка:', error);
      throw error;
    }
  },
  async findOne(id: number): Promise<Folder> {
    try {
      return await $fetch(`http://localhost:5000/folders/${id}`);
    } catch (error) {
      console.error('Произошла ошибка:', error);
      throw error;
    }
  },
  async update(id: number, data: Partial<Folder>): Promise<Folder> {
    try {
      return await $fetch(`http://localhost:5000/folders/${id}`, {
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
      return await $fetch(`http://localhost:5000/folders/${id}`, {
        method: 'delete'
      });
    } catch (error) {
      console.error('Произошла ошибка:', error);
      throw error;
    }
  },
}
