<template lang="pug">
  .new-comment
    img.user-avatar(src='../../../../../assets/vuejs_logo.png' alt='user picture')
    .comment-container
      h4.add-comment
        | Agregar comentario
      textarea.comment-text
      button.send(type='button')
        | Enviar
</template>

<script>
const makeComment = {
  name: 'makeComment'
}

export default makeComment
</script>

<style lang="scss" scoped>
@import "../../../../../scss/variables";

.new-comment {
  display: flex;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border: 1px solid $grey-3;
  border-radius: 50%;
  margin: 0 15px 0 25px;
}

.comment-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.add-comment {
  margin-top: 0;
}

.section-title {
  color: $green-1;
}

.comment-text {
  height: 75px;
  margin-bottom: 15px;
  max-width: 670px;
  width: 100%;
}

.send {
  background-color: $green-1;
  border: none;
  color: $white;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-right: 20px;
  width: 175px;
}
</style>
