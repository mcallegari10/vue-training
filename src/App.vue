<template lang="pug">
  #app
    navbar(v-if='isLoggedIn')
    router-view
</template>

<script>
import { mapGetters } from 'vuex'
import navbar from './components/Navbar'

export default {
  name: 'app',
  components: { navbar },
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  },
  created() {
    this.$store.dispatch('checkLoggedIn')
  }
}
</script>

<style lang="scss">
@import "/scss/normalize.scss";

* {
  font-family: 'Roboto', sans-serif;
}

</style>
