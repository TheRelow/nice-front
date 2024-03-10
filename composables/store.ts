import { useFolderStore } from "~/store/folderStore";
import { useTaskStore } from "~/store/taskStore";

let taskStoreInstance: any = null;
let folderStoreInstance: any = null;

export const store: any = new Proxy({}, {
    get: function(target, property) {
        if (property === 'task') {
            if (taskStoreInstance === null) {
                taskStoreInstance = useTaskStore();
            }
            return taskStoreInstance;
        } else if (property === 'folder') {
            if (folderStoreInstance === null) {
                folderStoreInstance = useFolderStore();
            }
            return folderStoreInstance;
        }
    }
});
