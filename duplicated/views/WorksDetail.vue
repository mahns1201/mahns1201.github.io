<template>
  <div>
    <works-detail-mixin :title="title" />
  </div>
  <!-- <div v-if="title === 'youtube'">
    <youtube-page />
  </div>
  <div v-else-if="title === 'gardening'">
    <gardening-page />
  </div>
  <div v-else-if="title === 'ponding'">
    <ponding-page />
  </div> -->
</template>

<script>
// import YoutubePage from '@/views/works/YoutubePage.vue';
// import GardeningPage from '@/views/works/GardeningPage.vue';
// import PondingPage from '@/views/works/PondingPage.vue';
import WorksDetailMixin from '@/views/mixins/WorksDetailMixin.vue';

export default {
  data() {
    return {
      title: '',
    };
  },

  components: {
    // YoutubePage,
    // GardeningPage,
    // PondingPage,
    WorksDetailMixin,
  },

  created() {
    // console.log(this.$route.query.title);
    const { title } = this.$route.query;

    this.title = title;
  },
};
</script>

<style></style>
