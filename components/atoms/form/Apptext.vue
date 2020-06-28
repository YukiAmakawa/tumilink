<template>
  <div :class="widthClass" class="FormText FormAtom">
    <input
      :id="id ? id : ''"
      v-model="inputText"
      :type="type"
      :placeholder="placeholder ? placeholder : ''"
      :disabled="disabled"
      :pattern="pattern"
      class="block w-full text-input"
    >
  </div>
</template>

<script lang="js">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppText',
  props: {
    id: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: '',
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    pattern: {
      type: String,
      default: ''
    }
  },
  computed: {
    inputText: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
})
</script>

<style lang="postcss" scoped>
.AppText {
  .text-input {
    border: 1px solid rgba(0, 0, 0, 0.15);
    /* padding: 12px; */
    min-height: 40px;
    border-radius: 3px;
    /* background-color: var(--white); */
    &:focus {
      border: 1px solid #3092e7;
    }
  }
  .text-input::placeholder {
    /* font-size: var(--text-md); */
  }
}
</style>
