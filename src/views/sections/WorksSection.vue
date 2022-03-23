<template>
  <div class="works">
    <article v-for="(cardInfo, index) in cardInfos" :key="index">
      <works-card :card-info="cardInfo" />
    </article>
  </div>
</template>

<script>
import WorksCard from '@/components/WorksCard.vue';

export default {
  data() {
    return {
      cardInfos: [
        {
          fileName: 'youtube.png',
          title: 'Youtube',
        },

        {
          fileName: 'gardening.jpeg',
          title: 'Smart Gardening',
        },

        {
          fileName: 'ponding.jpeg',
          title: 'Ponding Depth',
        },
      ],
    };
  },

  components: {
    WorksCard,
  },
};
</script>

<style></style>
