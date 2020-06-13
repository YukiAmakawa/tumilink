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
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
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
      isLoggedIn: false
    }
  },
  created() {
    this.initializeLiff()
  },
  methods: {
    initializeLiff() {
      // eslint-disable-next-line no-console
      console.log('init')
      const liff = window.liff
      try {
        liff.init({ liffId: process.env.liffId }, (data) => {
          // ログイン済み
          this.checkLogin()
          // eslint-disable-next-line no-console
          console.log('hoge')
          this.getUserProfile()
        })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('LIFF initialization failed', e)
      }
    },
    async getUserProfile() {
      const profile = await window.liff.getProfile()
      this.name = profile.displayName
    },
    checkLogin() {
      // eslint-disable-next-line no-console
      console.log(window.liff.isLoggedIn())
      if (!window.liff.isInClient() && !window.liff.isLoggedIn()) {
        // eslint-disable-next-line no-console
        console.log('login')
        // this.$router.push('./login')
        window.liff.login()
        // this.initializeLiff()
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
