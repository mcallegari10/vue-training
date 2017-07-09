<template lang="pug">
  form.filter(@submit.prevent='filterBooks')
    select.filter-value.m-right-3(@change='changeAtt')
      option(v-for='option in filterOptions' :value='option.value')
        | {{ option.label }}
    .search-value
      input.filter-value(type='text' placeholder='Buscar...' @change='changeValue')
      button.search-button(type='submit')
        img(src='../../../assets/search.svg')
</template>

<script>
const filterOptions = [
  { label: 'Seleccionar filtro', value: '' },
  { label: 'Autor', value: 'author' },
  { label: 'Nombre', value: 'title' }
]

const FilterBooks = {
  name: 'FilterBooks',
  data() {
    return {
      filterOptions
    }
  },
  methods: {
    changeAtt(event) {
      this.$store.dispatch('changeFilterAtt', event.target.value)
    },
    changeValue(event) {
      this.$store.dispatch('changeFilterValue', event.target.value)
    },
    filterBooks() {
      this.$store.dispatch('filterBooks')
    }
  }
}

export default FilterBooks
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";

.filter {
  display: flex;
  margin: 40px 0;
}

.filter-value {
  font-style: italic;
  background-color: $grey-1;
  border: none;
  height: 40px;
  padding: 0 12px;
  width: 240px;
}

.m-right-3 {
  margin-right: 30px;
}

.search-value {
  display: flex;
  font-style: italic;
  height: 100%;
  max-height: 40px;
}

.search-button {
  background-color: $green-1;
  border: none;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 40px;
}
</style>
