<template lang="pug">
  #app
    navbar(v-if='isLoggedIn')
    router-view
</template>

<script>
import navbar from './components/Navbar'
import auth from './auth'

export default {
  name: 'app',
  components: { navbar },
  computed: {
    isLoggedIn() {
      return auth.isLoggedIn()
    }
  }
}
</script>

<style lang="scss">
@import "/scss/normalize.scss";

* {
  font-family: 'Roboto', sans-serif;
}

</style>
