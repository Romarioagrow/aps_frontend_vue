<template>
  <a :href="gameUrl">
    <img :src="imageUrl" alt="Game banner">
  </a>
</template>

<script>
export default {
  props: {
    gameUrl: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}
</style>
