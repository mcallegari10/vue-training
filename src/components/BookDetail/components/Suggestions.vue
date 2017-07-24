<template lang="pug">
  .suggestions
    h3.section-title
      | Sugerencias
    .suggestions-container
      img.suggestion
      img.suggestion
      img.suggestion
      img.suggestion  
</template>

<script>
const Suggestions = {
  name: 'suggestions'
}

export default Suggestions
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";

.suggestions-container {
  padding: 0 25px 30px;
  border-bottom: 2px solid $blue-1;
}

.section-title {
  color: $green-1;
}

.suggestion {
  height: 125px;
  width: 90px;
  background: url('../../../assets/default_book.svg') no-repeat center $grey-2;
  margin-right: 55px; 
}

</style>
