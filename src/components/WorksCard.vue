<template>
  <div>
    <img :src="require(`@/assets/thumbnail/${fileName}`)" alt="works" />
  </div>
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

<style>
img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
