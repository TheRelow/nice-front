export interface Task {
  id: number,
  title: string,
  isDone: boolean,
  deadline: string | null,
  taskGroups: string[],
}
