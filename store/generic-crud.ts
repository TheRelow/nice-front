import {type Ref, ref} from 'vue'

type Resource<T> = {
  id: number;
  title: string;
} & T

export function useCrudApi<T extends Resource<any>>(resourceList: Ref<T[]>, api: any) {
  async function loadAllResources(): Promise<T[]> {
    try {
      const resources = await api.findAll();
      resourceList.value = resources
      return resources;
    } catch (error) {
      console.error(`Error while fetching`, error);
      throw error;
    }
  }

  async function loadResource(id: number): Promise<T[]> {
    try {
      const resource = await api.findOne(id);
      // @ts-ignore
      const idx = resourceList.value.findIndex((el: T) => el.id === id)
      if (idx !== -1) {
        // @ts-ignore
        resourceList.value[idx] = { ...resourceList.value[idx], ...resource }
      } else {
        resourceList.value.push(resource);
      }
      return resource;
    } catch (error) {
      console.error(`Error while fetching`, error);
      throw error;
    }
  }

  async function createResource(title: string): Promise<T> {
    try {
      const resource = await api.create(title);
      resourceList.value.push(resource);
      return resource;
    } catch (error) {
      console.error('Error while creating', error);
      throw error;
    }
  }

  async function updateResource(id: number, data: Partial<T>) {
    let beforeEdit = null
    // @ts-ignore
    const idx = resourceList.value.findIndex((el: T) => el.id === id)

    if (idx !== -1) {
      beforeEdit = resourceList.value[idx]
      // @ts-ignore
      resourceList.value[idx] = { ...beforeEdit, ...data }
    }

    try {
      const resource = await api.update(id, data);
      if (idx !== -1) {
        resourceList.value[idx] = resource
      } else {
        resourceList.value.push(resource)
      }
      return resource
    } catch (error) {
      if (beforeEdit !== null) {
        resourceList.value[idx] = beforeEdit
      }
      console.error('Error while updatig', error);
      throw error;
    }
  }

  async function deleteResource(id: number) {
    let deletedResource = null
    // @ts-ignore
    const idx = resourceList.value.findIndex((el: T) => el.id === id)

    if (idx !== -1) {
      deletedResource = resourceList.value.splice(idx, 1)[0]
    }

    try {
      return await api.remove(id);
    } catch (error) {
      if (deletedResource !== null) {
        resourceList.value.splice(idx, 0, deletedResource)
      }
      console.error('Error while deleting:', error);
      throw error;
    }
  }

  function getResource(id: number): T | undefined {
    // @ts-ignore
    const resource = resourceList.value.find((el: T) => el.id === id)
    return resource || undefined
  }

  return { resourceList, loadAllResources, loadResource, createResource, getResource, updateResource, deleteResource }
}