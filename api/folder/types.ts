export interface Folder {
  id: number,
  title: string,
  parentId?: number | null,
  list: Folder[]
}
export interface RootFolder {
  id: null,
  title: string,
  list: Folder[],
}
