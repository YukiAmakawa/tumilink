<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        tumilink
      </h1>
      <h2 class="subtitle">
        {{ name }}
      </h2>
      <div v-if="isLineClient" class="links">
        <div @click="sendMessage">
          送信
        </div>
      </div>
      <p>新しい部分</p>
      <li v-for="content in contents" :key="content">
        {{ content.url }}
      </li>

      {{ error }}
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      name: '',
      contents: [],
      lineId: '',
      error: ''
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
      } catch (e) {
        this.error = e
      }
    },
    async sendMessage() {
      try {
        await window.liff
          .sendMessages([
            {
              type: 'text',
              text: '送信が完了しました'
            }
          ])
        window.liff.closeWindow()
      } catch (e) {
        window.alert('Error sending message: ' + e)
      }
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
