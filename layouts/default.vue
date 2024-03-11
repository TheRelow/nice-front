<script setup lang="ts">
import _ from "lodash";
import type { changeEvent } from "@/components/features/FoldersList/types";

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

store.folder.loadAllFolders();
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
        <FoldersList style="margin: 0 -18px" />
        <div
          class="section__resizer"
          @mousedown="resizerMousedownHandler"
        ></div>
      </div>
      <div
        class="section__content"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.system-bar {
  height: 24px;
  background-color: $gray800;
}
.app {
  display: flex;
  width: 100vw;
  //height: calc(100svh - 24px);
  height: 100svh;
  background-color: $light50;
}
.navigation {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 72px;
  height: 100%;
  padding-top: 8px;
  background-color: $gray800;
}
.navigation__item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 48px;
  margin-bottom: 8px;
}
.navigation__link {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  transition: 0.2s;
  color: $gray50;
  background-color: $gray400;
  &:before {
    position: absolute;
    top: 50%;
    left: -15px;
    display: block;
    height: 8px;
    width: 8px;
    background-color: $gray50;
    border-radius: 0 4px 4px 0;
    transform: translateY(-50%);
    transition: 0.2s;
    content: "";
  }
  &:hover {
    border-radius: 12px;
    color: $light;
    &:before {
      width: 8px;
      height: 20px;
    }
  }
  &.router-link-active {
    background-color: $primary;
    filter: drop-shadow(0 0 35px $primary);

    &:before {
      width: 8px;
      height: 40px;
    }
  }
}

.section {
  display: flex;
  width: calc(100% - 72px);
  height: 100%;
}
.section__settings {
  flex: none;
  position: relative;
  min-width: 320px;
  height: 100%;
  background-color: $light100;
  padding: 12px 18px;
}
.section__content {
  flex: 1 1 auto;
  max-width: calc(100% - 320px);
  height: 100%;
  padding: 24px;
  > *:first-child {
    margin-top: 0;
  }
}
.section__resizer {
  position: absolute;
  top: 0;
  right: -5px;
  bottom: 0;
  width: 10px;
  cursor: ew-resize;
  &:after {
    position: absolute;
    top: 0;
    right: 5px;
    bottom: 0;
    width: 1px;
    background-color: transparent;
    transition: 0.15s;
    content: "";
  }
  &:hover {
    &:after {
      background-color: $gray500;
    }
  }
}
</style>
