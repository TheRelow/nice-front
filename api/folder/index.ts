import type { Folder } from "~/api/folder/types";
import { CrudApi } from "../crud.types";

export const folderApi = new CrudApi<Folder>('http://localhost:5000/folders');