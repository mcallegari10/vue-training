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

<style lang="scss" scoped>
@import "../../scss/variables";

.dropdown {
  position: absolute;
  right: 0;
  top: 150%;
  background-color: white;

  .menu {
    min-width: 160px;
    width: 100%;
    box-shadow: 0px 5px 10px $grey-2;

    .list {
      list-style: none;
      margin: 0;
      padding: 0;

      .option {
        cursor: pointer;
        border-bottom: 1px solid $grey-1;
        padding: 10px;
      }
    }
  }
}
</style>
