<template>
  <input type="text" v-model="inputValue" :class="classes" ref="input" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseInput",
  data: () => ({
    isFocus: false,
    inputValue: "",
  }),
  emits: ["update:focus", "update:modelValue"],
  props: {
    modelValue: {
      type: String,
    },
    focus: {
      type: Boolean,
      default: false,
    },
    rounding: String,
    fullWidth: Boolean,
    noOffset: Boolean,
  },
  computed: {
    classes(): string[] {
      let classList = [this.$style.input];

      if (this.$attrs.class) {
        classList.push(this.$attrs.class);
      }
      if (this.rounding) {
        classList.push(this.$style[`input_rounding_${this.rounding}`]);
      }
      if (this.fullWidth) {
        classList.push(this.$style[`input_full-width`]);
      }
      if (this.noOffset) {
        classList.push(this.$style[`input_no-offset`]);
      }

      return classList;
    },
  },
  methods: {
    focusHandler() {
      if (this.focus) {
        this.$refs.input.focus();
      }
    },
  },
  mounted() {
    this.$refs.input.onblur = () => {
      this.$emit("update:focus", false);
    };
    this.$refs.input.onfocus = () => {
      this.$emit("update:focus", true);
    };
    this.focusHandler()
  },
  watch: {
    focus: {
      handler: function () {
        this.focusHandler()
      },
    },
    modelValue: {
      handler: function (val) {
        this.inputValue = val;
      },
      immediate: true,
    },
    inputValue: {
      handler: function (val) {
        this.$emit("update:modelValue", val);
      },
      immediate: true,
    },
  },
});
</script>

<style module lang="scss">
.input {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: $fieldHeight;
  margin-bottom: 0.5rem;
  padding: 1rem;
  border-radius: $fieldBorderRadius;
  background-color: transparent;
  border: 1px solid $fieldBorderColor;
  color: $gray50;
}
.input_rounding_circle {
  border-radius: 500px;
}
.input_full-width {
  width: 100%;
}
.input_no-offset {
  margin: 0;
}
</style>
