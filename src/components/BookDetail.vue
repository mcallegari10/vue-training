<template lang="pug">
  .book-detail-container
    router-link.go-back(:to='{ name: "dashboard" }')
      | < Volver
    .book-detail
      img.book-cover(:src='book.image_url'  :class='{ "no-cover": !book.image_url }')
      .book-info
        h4.title
          | {{ book.title }}
        span.author
          | {{ book.author }}
        span.year
          | {{ book.year }}
        span.genre
          | {{ book.genre }}
        p.summary
          | {{ summary }}
        button.rent-button
          | Alquilar
</template>

<script>
import books from '../resources/books.json';

const bookDetail = {
  name: 'bookDetail',
  data() {
    return {
      summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    };
  },
  computed: {
    book() {
      const bookId = parseInt(this.$router.currentRoute.params.id, 10);
      return books.filter((book) => {
        return book.id === bookId;
      })[0];
    }
  }
};

export default bookDetail;
</script>

<style lang="scss">
@import "../scss/variables";

.go-back {
  text-decoration: none;
  color: $black;
}

.book-detail-container {

  .no-cover {
    background: url('../assets/default_book.svg') no-repeat center $grey-2;
  }
}

</style>
