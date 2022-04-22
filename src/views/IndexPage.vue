<template>
  <main-carousel></main-carousel>
</template>

<script>
// carousel
import MainCarousel from '@/components/carousel/MainCarousel.vue';

// pages
import ProfilePage from '@/views/pages/ProfilePage.vue';
import HistoryPage from '@/views/pages/HistoryPage.vue';
import SkillPage from '@/views/pages/SkillPage.vue';
import WorksPage from '@/views/pages/WorksPage.vue';
import AwardPage from '@/views/pages/AwardPage.vue';

export default {
  data() {
    return {
      tab: '',
    };
  },

  components: {
    MainCarousel,
    ProfilePage,
    HistoryPage,
    SkillPage,
    WorksPage,
    AwardPage,
  },

  computed: {
    changeTab() {
      return this.$store.state.tab;
    },
  },

  watch: {
    changeTab(currentTab) {
      this.tab = currentTab;
    },
  },

  created() {
    this.tab = this.$store.state.tab;
  },
};
</script>
