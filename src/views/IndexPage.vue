<template>
  <section>
    <profile-section />
  </section>

  <!-- tab -->
  <section>
    <tab-section />
  </section>

  <section>
    <skill-section v-if="tab === 'skills'" />
    <works-section v-else-if="tab === 'works'" />
  </section>
</template>

<script>
import ProfileSection from '@/views/sections/ProfileSection.vue';
import TabSection from '@/views/sections/TabSection.vue';
import SkillSection from '@/views/sections/SkillSection.vue';
import WorksSection from '@/views/sections/WorksSection.vue';

export default {
  data() {
    return {
      tab: 'skills',
    };
  },
  components: {
    ProfileSection,
    TabSection,
    SkillSection,
    WorksSection,
  },

  computed: {
    changeTab() {
      return this.$store.state.tab;
    },
  },

  watch: {
    changeTab(value) {
      this.tab = value;
    },
  },
};
</script>
