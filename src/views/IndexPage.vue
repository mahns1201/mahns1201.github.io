<template>
  <!-- profile -->
  <!-- <section>
    <profile-section />
  </section> -->

  <!-- tab -->
  <section>
    <tab-section />
  </section>

  <!-- works -->
  <section>
    <history-section v-if="tab === 'history'" />
    <skill-section v-else-if="tab === 'skills'" />
    <works-section v-else-if="tab === 'works'" />
  </section>
</template>

<script>
// import ProfileSection from '@/views/sections/ProfileSection.vue';
import TabSection from '@/views/sections/TabSection.vue';
import HistorySection from '@/views/sections/HistorySection.vue';
import SkillSection from '@/views/sections/SkillSection.vue';
import WorksSection from '@/views/sections/WorksSection.vue';

export default {
  data() {
    return {
      tab: '',
    };
  },

  components: {
    // ProfileSection,
    TabSection,
    HistorySection,
    SkillSection,
    WorksSection,
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
