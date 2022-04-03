<template>
  <div class="works">
    <article v-for="(cardInfo, index) in cardInfos" :key="index">
      <router-link :to="{ path: '/works', query: { title: cardInfo.link } }">
        <works-card :card-info="cardInfo" />
      </router-link>
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
          link: 'youtube',
        },

        {
          fileName: 'gardening.jpeg',
          title: 'Smart Gardening',
          link: 'gardening',
        },

        {
          fileName: 'ponding.jpeg',
          title: 'Ponding Depth',
          link: 'ponding',
        },
      ],
    };
  },

  components: {
    WorksCard,
  },

  methods: {
    // onWorksDetail(path) {
    //   this.$router.push(`works/${path}`);
    // },
  },
};
</script>

<style></style>
