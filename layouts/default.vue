<script setup lang="ts">
const navRoutes = [
  {
    to: '/',
    title: '/',
  },
  {
    to: '/dev',
    title: 'dev',
  },
]
</script>

<template>
  <div class="system-bar"></div>
  <div class="app">
    <nav class="navigation">
      <ul class="navigation__list">
        <li v-for="item of navRoutes" class="navigation__item">
          <NuxtLink :to="item.to" class="navigation__link">{{ item.title }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="section">
      <div class="section__navigation"></div>
      <div class="section__content file">
        <div class="file__top-bar"></div>
        <div class="file__main">
          <div class="file__content">
            <slot></slot>
          </div>
          <div class="file__navigation">
          </div>
        </div>
      </div>
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
  height: calc(100svh - 24px);
  background-color: $gray500;
}
.navigation {
  width: 72px;
  height: 100%;
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
    left: -4px;
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
    background-color: $primary;
    &:before {
      width: 8px;
      height: 20px;
    }
  }
  &.router-link-active {
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
.section__navigation {
  width: 232px;
  height: 100%;
  background-color: $gray600;
}
.section__content {
  width: calc(100% - 232px);
  height: 100%;
}
.file__top-bar {
  width: 100%;
  height: 0;
}
.file__main {
  display: flex;
  width: 100%;
  height: 100%;
}
.file__content {
  width: calc(100% - 240px);
  height: 100%;
  padding: 24px;
  overflow: auto;
}
.file__navigation {
  width: 240px;
  height: 100%;
  background-color: $gray600;
}
</style>
