<template>
  <div class="wrap">
    <AppSearch
      v-model="searchText"
      :handleSearch="handleSearch"
    />
    <div v-if="isLineClient" class="links">
      <Content
        v-for="(content, index) in filteredContents"
        :key="index"
        :content="content"
      />
      {{ error }}
    </div>
  </div>
</template>

<script>
import AppSearch from '@/components/atoms/form/AppSearch.vue'
import Content from '@/components/molecules/card/Content.vue'
export default {
  components: {
    AppSearch,
    Content
  },
  data() {
    return {
      name: '',
      contents: [],
      filteredContents: [],
      lineId: '',
      error: '',
      searchText: ''
    }
  },
  async created() {
    await this.initializeLiff()
    this.fetchUserContens()
  },
  methods: {
    initializeLiff() {
      const liff = window.liff
      try {
        liff.init({ liffId: process.env.LIFF_ID }, (data) => {
          this.checkLogin()
          this.getUserProfile()
          // this.lineId = data.context.userId
          this.lineId = process.env.SAMPLE_LINE_ID
        })
      } catch (e) {
        // eslint-disable-next-line no-console
        // console.log('LIFF initialization failed', e)
        this.error = e
      }
    },
    async getUserProfile() {
      const profile = await window.liff.getProfile()
      this.name = profile.displayName
    },
    isLineClient() {
      return window.liff.isInClient()
    },
    checkLogin() {
      if (!this.isLineClient && !window.liff.isLoggedIn()) {
        window.liff.login()
      }
    },
    async fetchUserContens() {
      try {
        const { data } = await this.$axios.get(`${process.env.API_URL}api/users/1`)
        this.contents = data.response.contents
        this.filteredContents = data.response.contents
      } catch (e) {
        this.error = e
      }
    },
    handleSearch() {
      if (!this.contents) return
      if (!this.searchText) {
        this.filteredContents = this.contents
      } else {
        this.filteredContents = this.contents.filter((content) => {
          return content.url.includes(this.searchText)
        })
      }
    }
    // async sendMessage() {
    //   try {
    //     await window.liff
    //       .sendMessages([
    //         {
    //           type: 'text',
    //           text: '送信が完了しました'
    //         }
    //       ])
    //     window.liff.closeWindow()
    //   } catch (e) {
    //     window.alert('Error sending message: ' + e)
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  .links {
    margin-top: 47px;
    .content + .content {
      margin-top: 50px;
    }
  }
}
</style>
