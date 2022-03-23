<template>
  <div class="card__works">
    <img
      :src="require(`@/assets/thumbnail/${cardInfo.fileName}`)"
      alt="works"
    />
    <div class="card__works__cover">{{ cardInfo.title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    cardInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>
