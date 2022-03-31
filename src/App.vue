<template>
  <div class="adjustment adjustment__height">
    <index-page />
  </div>
  <div>
    <footer-section />
  </div>
</template>

<script>
import IndexPage from '@/views/IndexPage';
import FooterSection from '@/views/sections/FooterSection.vue';

export default {
  name: 'App',

  components: {
    IndexPage,
    FooterSection,
  },
};
</script>

<style lang="scss">
@import '@/styles/main.scss';
</style>
