<template>
  <img :src="require(`@/assets/thumbnail/${fileName}`)" alt="works" />
</template>

<script>
export default {
  props: {
    fileName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
