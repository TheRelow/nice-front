export interface changeEvent {
  el: number;
  to: number | null;
}

export interface Folder {
  id: number,
  title: string,
  list: Folder[],
  nestedElementIds?: number[],
  parentId: number | null,
}
