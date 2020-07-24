<template>
  <div class="content">
    <div class="content-img">
      <img src="@/assets/img/default.png" alt="" width="64px" height="64px">
    </div>
    <a :href="content.url" class="content-main">
      <p class="content-title">
        {{ content.title }}
      </p>
      <span class="content-date">{{ fromNow(content.created_at) }}</span>
      <span class="content-read">{{ content.read }}人が既読</span>
    </a>
    <div class="content-menu flex flex-middle">
      <Menu @click="show" />
      <AppModal name="content-modal">
        <AppButton @click="onRead">
          既読にする
        </AppButton>
        <AppButton @click="onDelete">
          削除する
        </AppButton>
      </AppModal>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue'
import Menu from '@/assets/icons/menu.svg'
import AppModal from '@/components/templates/AppModal.vue'
import AppButton from '@/components/atoms/buttons/AppButton.vue'
export default Vue.extend({
  components: {
    Menu,
    AppModal,
    AppButton
  },
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    fromNow(time) {
      return time ? this.$dayjs(time).fromNow() : ''
    },
    show() {
      this.$modal.show('content-modal')
    },
    hide() {
      this.$modal.hide('content-modal')
    },
    onRead() {
      // console.log('read')
      this.hide()
    },
    onDelete() {
      // console.log('delete')
      this.hide()
    }
  }
})
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 64px;
  display: grid;
  grid-template:
    'content-img content-main content-menu' 64px /
    64px 218px 48px;
}
.content-img {
  grid-area: content-img;
}
.content-main {
  grid-area: content-main;
  margin: 0 0 0 18px;
  display: grid;
  grid-template:
    'content-title content-title' auto
    'content-date content-read' 18px /
    50% 50%;
  .content-title {
    grid-area: content-title;
    font-size: var(--text-md);
  }
    .content-date {
      grid-area: content-date;
      text-align: left;
      font-size: var(--text-sm);
      color: var(--base);
    }
    .content-read {
      grid-area: content-read;
      text-align: right;
      font-size: var(--text-sm);
      color: var(--base);
    }
}
.content-menu {
  grid-area: content-menu;
  margin: 0 0 0 26px;
}
</style>
