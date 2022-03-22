<template>
  <div class="adjustment">
    <index-page />
  </div>
</template>

<script>
import IndexPage from '@/views/IndexPage';

export default {
  name: 'App',

  components: {
    IndexPage,
  },
};
</script>

<style lang="scss">
@import '@/styles/main.scss';
</style>
