import { useFolderStore } from "~/store/folderStore";
import { useTaskStore } from "~/store/taskStore";

let storeInstance: any = {
  task: null,
  folder: null,
}


export const store: any = new Proxy(storeInstance, {
    get: function(target, property) {
        if (property === 'task') {
            if (storeInstance.task === null) {
                storeInstance.task = useTaskStore();
            }
            return storeInstance.task;
        } else if (property === 'folder') {
            if (storeInstance.folder === null) {
                storeInstance.folder = useFolderStore();
            }
            return storeInstance.folder;
        }
    }
});
