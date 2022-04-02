<template>
  <div>
    <profile-section />
  </div>
  <div class="adjustment adjustment__height">
    <!-- <index-page /> -->
    <router-view />
  </div>
  <div>
    <footer-section />
  </div>
</template>

<script>
import ProfileSection from '@/views/sections/ProfileSection.vue';
// import IndexPage from '@/views/IndexPage';
import FooterSection from '@/views/sections/FooterSection.vue';

export default {
  name: 'App',

  components: {
    ProfileSection,
    // IndexPage,
    FooterSection,
  },
};
</script>

<style lang="scss">
@import '@/styles/main.scss';
</style>
