
<template>
  <modal
    :name="name"
    width="267px"
    height="300px"
    class="modal"
  >
    <div class="modal-wrapper">
      <Close @click="closeModal" class="close" />
      <slot />
    </div>
  </modal>
</template>
<script lang="ts">
import Vue from 'vue'
import Close from '@/assets/icons/close.svg'
export default Vue.extend({
  name: 'AppModal',
  components: {
    Close
  },
  props: {
    name: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    closeModal() {
      this.$modal.hide('content-modal')
    }
  }
})
</script>
<style lang="scss" scoped>
.modal {
  /deep/ .vm--overlay {
    background: rgba(84, 119, 140, 0.1)
  }
}
.modal-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 50px 60px;
  display: grid;
  place-items: center;
}
.close {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
