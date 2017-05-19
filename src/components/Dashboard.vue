<template lang="pug">
  .dashboard
    .dashboard-container
      form.filter(@submit.prevent='filterBooks')
        select.filter-value.m-right-3(v-model='filterAtt')
          option(v-for='option in filterOptions'  :value='option.value')
            | {{ option.label }}
        .search-value
          input.filter-value(type='text' placeholder='Buscar...' v-model='filterValue')
          button.search-button(type='submit')
            img(src='../assets/search.svg')
      .books-container
        router-link.book(v-for='book of filteredBooks'  :key='book.id'  :to='{ name: "bookDetail", params: { id: book.id }}')
          img.book-cover(:src='book.image_url'  :class='{ "no-cover": !book.image_url }')
          h5.book-title
            | {{ book.title }}
          span.book-author
            | {{ book.author }}
</template>

<script>
import books from '../resources/books.json';

const filterOptions = [
  { label: 'Seleccionar filtro', value: '' },
  { label: 'Autor', value: 'author' },
  { label: 'Nombre', value: 'title' }
];

const dashboard = {
  name: 'dashboard',
  data() {
    return {
      filterOptions,
      filterValue: '',
      filterAtt: '',
      books,
      filteredBooks: books
    };
  },
  methods: {
    filterBooks() {
      this.filteredBooks = this.books.filter((book) => {
        return book[this.filterAtt].toLowerCase().includes(this.filterValue.toLowerCase());
      });
    }
  }
};

export default dashboard;
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;

  .dashboard-container {
    max-width: 725px;
    width: 100%;
  }
}

.filter {
  display: flex;
  margin: 40px auto;
}

.filter-value {
  font-style: italic;
  background-color: $grey-1;
  border: none;
  height: 40px;
  padding: 0 12px;
  width: 240px;
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

.books-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 725px;
  width: 100%;

  .book {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 20px 65px 0;
    max-width: 130px;
    text-decoration: none;
    color: $black;
    width: 100%;

    .book-cover {
      height: 180px;
      width: 130px;
    }

    .no-cover {
      background: url('../assets/default_book.svg') no-repeat center $grey-2;
    }

    .book-title {
      font-size: 14px;
    }

    .book-author {
      font-size: 12px;
    }
  }
}

.m-right-3 {
  margin-right: 30px;
}
</style>
