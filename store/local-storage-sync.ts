import type {Ref} from "vue";

function getLsKey(key: string): string {
  return `lsStore_${key}`
}

export function saveInLocalStorageStore(key: string, value: string) {
  localStorage.setItem(getLsKey(key), JSON.stringify(value))
}

export function getFromLocalStorageStore(key: string, defaultValue: any): any {
  let value = localStorage.getItem(getLsKey(key))
  if (!value) return defaultValue
  return JSON.parse(value)
}

export function syncRefWithLocalStorage(key: string, defaultValue: any, watchProps: object = {}): Ref {
  const value = ref(defaultValue)
  value.value = getFromLocalStorageStore(key, defaultValue)
  watch(value, (val)=>{
    console.log('sync ref has changed')
    saveInLocalStorageStore(key, val)
  }, watchProps)
  return value
}
