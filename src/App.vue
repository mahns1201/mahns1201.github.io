<template>
  <div>
    <div>
      <profile-section />
    </div>
    <div class="adjustment adjustment__height">
      <router-view />
    </div>
    <div>
      <footer-section></footer-section>
    </div>
  </div>
</template>

<script>
import ProfileSection from '@/views/sections/ProfileSection.vue';
import FooterSection from '@/views/sections/FooterSection.vue';

export default {
  name: 'App',

  components: {
    ProfileSection,
    FooterSection,
  },
};
</script>

<style lang="scss">
@import '@/styles/main.scss';
</style>
