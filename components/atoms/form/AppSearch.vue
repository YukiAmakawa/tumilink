<template>
  <div class="search-wrap">
    <input
      @change.prevent="onSearch"
      @blur="onSearch"
      v-model="text"
      :placeholder="placeholder"
      class="search"
    >
    <span class="search-btn-wrap">
      <button @click.prevent="onSearch" class="search-btn">
        <SearchIcon />
      </button>
    </span>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
import SearchIcon from '@/assets/icons/search.svg'
export default Vue.extend({
  components: {
    SearchIcon
  },
  props: {
    placeholder: { type: String, default: '検索' },
    handleSearch: {
      type: Function,
      default: () => {}
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  computed: {
    text: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    onSearch() {
      this.handleSearch(`${this.text}`)
    }
  }
})
</script>

<style lang="scss" scoped>
.search-wrap {
  min-width: 330px;
  border-radius: 10px;
  /* border: solid 1px #eaeef4; */
  display: grid;
  grid-template:
    'search search-btn-wrap' auto /
    auto 30px;
  overflow: hidden;
  background: var(--background);
}
.search {
  grid-area: search;
  /* border: none; */
  font-size: var(--text-lg);
  line-height: 30px;
  padding: 0 12px;
  /* &:placeholder-shown {
    color: var(--dark-sky-blue);
  }
  &:focus {
    outline: none;
  } */
}
.search-btn-wrap {
  grid-area: search-btn-wrap;
}
.search-btn {
  width: 100%;
  height: 100%;
  svg {
    margin-top: 3px;
  }
}
</style>
