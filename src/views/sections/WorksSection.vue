<template>
  <article class="works">
    <works-card :file-name="test" />
    <works-card :file-name="test" />
    <works-card :file-name="test" />
    <works-card :file-name="test" />
    <works-card :file-name="test" />
  </article>
</template>

<script>
import WorksCard from '@/components/WorksCard.vue';

export default {
  data() {
    return {
      test: 'youtube.jpeg',
    };
  },

  components: {
    WorksCard,
  },
};
</script>

<style></style>
