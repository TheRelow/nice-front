<script setup lang="ts">
const navRoutes = [
  {
    to: { name: 'app' },
    icon: 'home',
  },
  {
    to: { name: 'folders' },
    icon: 'folder',
  },
  {
    to: { name: 'tasks' },
    icon: 'format-list-checkbox',
  },
  {
    to: { name: 'goals' },
    icon: 'bullseye-arrow',
  },
  {
    to: { name: 'school' },
    icon: 'school',
  },
  {
    to: { name: 'blogConfig' },
    icon: 'post',
  },
  {
    to: { name: 'dev' },
    icon: 'cogs',
  },
]
const navAppSettings = ref()
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
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.system-bar {
  height: 24px;
  background-color: $gray800;
}
.app {
  display: flex;
  width: 100vw;
  //height: calc(100svh - 24px);
  height: 100svh;
  background-color: $gray500;
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
    content: '';
  }
  &:hover {
    border-radius: 12px;
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
</style>
