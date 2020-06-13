<template>
  <div class="container">
    <p @click="login">
      Login
      {{ name }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  created() {
    this.initializeLiff()
  },
  methods: {
    initializeLiff() {
      this.checkLogin()
    },
    checkLogin() {
      if (window.liff.isLoggedIn()) {
        this.$router.push('/')
      }
    },
    login() {
      const liff = window.liff
      liff.login()
      try {
        liff.init({ liffId: process.env.liffId }, (data) => {
          const profile = window.liff.getProfile()
          this.name = profile.displayName
        })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('LIFF initialization failed', e)
      }
      // this.$router.push('/')
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
