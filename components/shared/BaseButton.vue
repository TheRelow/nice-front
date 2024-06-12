<script setup lang="ts">
const props = defineProps({
  size: {
    type: String,
    default: "s",
    validator: (value: string) =>
        ["xs", "s", "m", "l", "xxl"].includes(value),
  },
  type: {
    type: String,
    default: "primary",
    validator: (value: string) =>
        ["primary", "secondary", "tertiary"].includes(value),
  },
  rounding: {
    type: [Boolean, String],
    default: true,
  },
  tag: {
    type: String,
    default: "button",
    validator: (value: string) =>
        [
          "button",
          "a",
          "nuxt-link",
          "NuxtLink",
        ].includes(value),
  },
  color: {
    type: String,
    default: "default",
    // validator: (value: string) => ["default", "accent"].includes(value),
  },
  class: {
    type: String
  },
  to: {
    type: [Object, String]
  },
  href: {
    type: String
  },
  icon: {
    type: Boolean
  }
})

const classes = computed((): string[] => {
  let classList = ['button'];

  if (props.color !== "default") {
    classList.push(`button_color_${props.color}`);
  }
  if (props.size !== "m") {
    classList.push(`button_size_${props.size}`);
  }
  if (props.type !== "primary") {
    classList.push(`button_type_${props.type}`);
  }
  if (props.rounding === false) {
    classList.push('button_rounding_off');
  }
  if (typeof props.rounding === "string") {
    classList.push(`button_rounding_${props.rounding}`);
  }
  if (props.icon) {
    classList.push("button_icon")
  }
  if (props.class) {
    classList.push(props.class);
  }

  return classList;
})
</script>

<template>
  <NuxtLink :to="props.to" :class="classes" data-base-button v-if="props.tag === 'nuxt-link' || props.tag === 'NuxtLink'">
    <span class="button__content">
      <slot></slot>
    </span>
  </NuxtLink>
  <a :href="props.href" :class="classes" data-base-button v-else-if="props.tag === 'a'">
    <span class="button__content">
      <slot></slot>
    </span>
  </a>
  <component :is="props.tag" :class="classes" data-base-button v-else>
    <span class="button__content">
      <slot></slot>
    </span>
  </component>
</template>
