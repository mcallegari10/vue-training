<template lang="pug">
  .comment-section
    h3.section-title
      | Comentarios
    MakeComment
</template>

<script>
import MakeComment from './components/MakeComment'

const comment = {
  name: 'comment',
  components: { MakeComment }
}

export default comment
</script>

<style lang="scss" scoped>
@import "../../../../scss/variables";

.section-title {
  color: $green-1;
}
</style>
