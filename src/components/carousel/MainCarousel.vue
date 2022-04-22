<template>
  <div>
    <profile-page class="page__default"></profile-page>
    <history-page class="page__default"></history-page>
    <skill-page class="page__default"></skill-page>
    <works-page class="page__default"></works-page>
    <award-page class="page__default"></award-page>
  </div>
</template>

<script>
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
    ProfilePage,
    HistoryPage,
    SkillPage,
    WorksPage,
    AwardPage,
  },
};
</script>

<style></style>
