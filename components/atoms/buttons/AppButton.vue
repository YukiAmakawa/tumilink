<template>
  <button
    :disabled="disabled"
    :class="[theme, size]"
    @click="handleClick"
    class="AppButton"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppButton',
  props: {
    theme: {
      type: String,
      default: 'none'
    },
    size: {
      type: String,
      default: 'md'
    },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    // textTheme(): string {
    //   if (['default', 'white'].includes(this.theme)) return 'positive'
    //   if (['positive', 'warn'].includes(this.theme)) return 'white'
    //   return 'positive'
    // }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
})
</script>

<style lang="postcss" scoped>
.AppButton {
  width: 100%;
  border-radius: 20px;
  text-align: center;
  /* border: none;
  cursor: pointer; */
}
.AppButton:hover {
  opacity: 0.75;
}
.AppButton:disabled {
  opacity: 0.3;
  cursor: auto;
}
.AppButton.none {
  /* background-color: var(--gray-light); */
}
.AppButton.white {
  /* border: 1px solid var(--gray-base);
  background-color: var(--white); */
}
.AppButton.positive {
  /* background-color: var(--primary-base); */
}
/* .AppButton.warn {
  background-color: var(--warn-base);
} */
.AppButton.sm {
  font-size: var(--margin-sm);
  padding: 15px 10px;
}
.AppButton.md {
  font-size: var(--margin-md);
  padding: 20px 15px;
}
.AppButton.lg {
  font-size: var(--margin-lg);
  padding: 35px 20px;
}
</style>
