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
    default: false,
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
  if (props.rounding !== false) {
    classList.push('button_rounding');
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

<style scoped lang="scss">
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: $buttonHeight;
  padding: 0.25em 1.75em;
  background-color: $primary;
  font-size: 1rem;
  line-height: 1.2;
  border-radius: 0.5em;
  border: 1px solid $primary;
  color: $light;
  cursor: pointer;
  transition: background-color 0.2s, border 0.2s;
  text-decoration: none;

  &:hover {
    background-color: $primary700;
    border-color: $primary700;
  }

  &:active {
    background-color: $primary900;
    border-color: $primary900;
  }
}

.button__content {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: $buttonContentGap;
}

.button_size {
  &_s {
    min-height: $buttonHeightS;
    padding: 0.25em 1.375em;
  }
  &_xs {
    min-height: $buttonHeightXS;
    padding: 0.25em 1em;
  }
}

.button_type {
  &_secondary {
    background-color: transparent;
    border: 1px solid $primary;
    color: $primary;

    &:hover {
      color: $light;
    }

    &:active {
      background-color: $primary900;
      border: 1px solid $primary900;
    }
  }

  &_tertiary {
    background-color: transparent;
    border-color: transparent;
    color: $primary;

    &:hover {
      background-color: $primary50;
      border-color: $primary50;
    }

    &:active {
      background-color: $primary100;
      border-color: $primary100;
      color: $primary900;
    }
  }
}

.button_rounding {
  border-radius: 500px;
}

.button_rounding_icon {
  width: $buttonHeight;
  height: $buttonHeight;
  padding: 0;

  &.button_size_s {
    width: $buttonHeightS;
    height: $buttonHeightS;
  }

  &.button_size_s {
    width: $buttonHeightXS;
    height: $buttonHeightXS;
  }
}

.button_color {
  &_accent {
    background-color: $accent;
    border-color: $accent;
    &:hover {
      background-color: $accent700;
      border-color: $accent700;
    }
    &:active {
      background-color: $accent900;
      border-color: $accent900;
    }
    &.button_type_secondary {
      color: $accent;
      background-color: transparent;
      &:hover {
        background-color: $accent;
        color: $light;
      }
    }
    &.button_type_tertiary {
      background-color: transparent;
      border-color: transparent;
      color: $accent;

      &:hover {
        background-color: $accent50;
        border-color: $accent50;
      }

      &:active {
        background-color: $accent100;
        border-color: $accent100;
        color: $accent900;
      }
    }
  }
  &_accent-light {
    background-color: $accent600;
    border-color: $accent600;
    &:hover {
      background-color: $accent500;
      border-color: $accent500;
    }
    &:active {
      background-color: $accent700;
      border-color: $accent700;
    }
    &.button_type_secondary {
      color: $accent600;
      background-color: transparent;
      &:hover {
        background-color: $accent600;
        color: $light;
      }
    }
    &.button_type_tertiary {
      background-color: transparent;
      border-color: transparent;
      color: $accent600;

      &:hover {
        background-color: $accent50;
        border-color: $accent50;
      }

      &:active {
        background-color: $accent100;
        border-color: $accent100;
        color: $accent700;
      }
    }
  }
}

.button_icon {
  padding: 0.25em 0.25em;
}
</style>
