<template>
  <div class="works">
    <article v-for="fileName in fileNames" :key="fileName">
      <works-card :file-name="fileName" />
    </article>
  </div>
</template>

<script>
import WorksCard from '@/components/WorksCard.vue';

export default {
  data() {
    return {
      fileNames: ['youtube.png', 'gardening.jpeg', 'ponding.jpeg'],
    };
  },

  components: {
    WorksCard,
  },
};
</script>

<style></style>
