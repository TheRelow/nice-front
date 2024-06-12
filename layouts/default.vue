<script setup lang="ts">
import type { changeEvent } from "@/components/features/FoldersList/types";
import { useFolderStore } from "~/store/folderStore";

const folderStore = useFolderStore();

const folderListWithNesting = computed(
  () => store.folder.folderListWithNesting
);

function folderChangehandler(e: changeEvent) {
  store.folder.updateFolder(e.el, { parentId: e.to });
}

const navRoutes = [
  {
    to: { name: "app" },
    icon: "home",
  },
  {
    to: { name: "folders" },
    icon: "folder",
  },
  {
    to: { name: "tasks" },
    icon: "format-list-checkbox",
  },
  {
    to: { name: "goals" },
    icon: "bullseye-arrow",
  },
  {
    to: { name: "education" },
    icon: "school",
  },
  {
    to: { name: "blogConfig" },
    icon: "post",
  },
  {
    to: { name: "dev" },
    icon: "cogs",
  },
];
const navAppSettings = ref();

const sidebarWidth = ref(320);
function resizerMousedownHandler() {
  document.body.classList.add("block-user-select");
  window.addEventListener("mousemove", resize);
  window.addEventListener("mouseup", stopResize);
}
function resize(e: any) {
  sidebarWidth.value = e.clientX - 72;
  // const rect = sidebar.getBoundingClientRect();
  // reactive.left
}
function stopResize() {
  document.body.classList.remove("block-user-select");
  window.removeEventListener("mousemove", resize);
}

// TODO: понять почему не работает с composable
await useAsyncData("tasks", () => folderStore.loadAllFolders());
</script>

<template>
  <div class="app">
    <div class="navigation">
      <nav>
        <ul>
          <li v-for="item of navRoutes" class="navigation__item">
            <NuxtLink :to="item.to" class="navigation__link">
              <BaseIcon color="inherit" :icon="item.icon" />
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li v-for="item of navAppSettings" class="navigation__item">
            <NuxtLink :to="item.to" class="navigation__link">
              <BaseIcon color="inherit" :icon="item.icon" />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="section">
      <div class="section__settings" :style="`width: ${sidebarWidth}px`">
        <FoldersList style="margin: 0 -18px" :list="store.folder.folderListWithNesting" />
        <div
          class="section__resizer"
          @mousedown="resizerMousedownHandler"
        ></div>
      </div>
      <div class="section__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
