<template lang="pug">
  #app
    navbar
    router-view
</template>

<script>
import navbar from './components/Navbar'

export default {
  name: 'app',
  components: { navbar }
}
</script>

<style lang="scss">
@import "/scss/normalize.scss";

* {
  font-family: 'Roboto', sans-serif;
}

</style>
