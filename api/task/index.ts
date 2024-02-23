import type { Task } from "~/api/task/types";
import { CrudApi } from "../crud.types";

export const taskApi = new CrudApi<Task>('http://localhost:5000/tasks');