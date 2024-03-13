export class CrudApi<T> {
    constructor(private baseUrl: string) {}
  
    async findAll(): Promise<T[]> {
      try {
        return await $fetch(this.baseUrl);
      } catch (error) {
        console.error('Произошла ошибка:', error);
        throw error;
      }
    }
  
    async create<T extends BodyInit | Record<string, any> | null | undefined>(data: T): Promise<T> {
      try {
        return await $fetch(this.baseUrl, {
          method: 'POST',
          body: data,
        });
      } catch (error) {
        console.error('Произошла ошибка:', error);
        throw error;
      }
    }
  
    async findOne(id: number): Promise<T> {
      try {
        return await $fetch(`${this.baseUrl}/${id}`);
      } catch (error) {
        console.error('Произошла ошибка:', error);
        throw error;
      }
    }
  
    async update(id: number, data: Partial<T>): Promise<T> {
      try {
        return await $fetch(`${this.baseUrl}/${id}`, {
          method: 'PATCH',
          body: data
        });
      } catch (error) {
        console.error('Произошла ошибка:', error);
        throw error;
      }
    }
  
    async remove(id: number) {
      try {
        return await $fetch(`${this.baseUrl}/${id}`, {
          method: 'DELETE'
        });
      } catch (error) {
        console.error('Произошла ошибка:', error);
        throw error;
      }
    }
  }
