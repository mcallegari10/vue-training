<template lang="pug">
  .dropdown
    .menu(v-show='toggle')
      ul.list
        li.option(v-for='option in options' @click.prevent='selectOption(option)')
          | {{ option.label }}
</template>

<script>
const dropdown = {
  name: 'dropdown',
  props: ['options', 'toggle'],
  methods: {
    selectOption(option) {
      this.$emit('selectOption', option)
    }
  }
}

export default dropdown
</script>

<style lang="scss">
</style>
