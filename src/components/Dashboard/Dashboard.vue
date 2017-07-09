<template lang="pug">
  .dashboard
    FilterBooks
    Books
</template>

<script>
import FilterBooks from './components/Filter'
import Books from './components/Books'

const dashboard = {
  name: 'dashboard',
  components: { FilterBooks, Books },
  beforeMount() {
    this.$store.dispatch('getAllBooks')
  }
}

export default dashboard
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 725px;
  width: 100%;
}
</style>
