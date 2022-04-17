<template>
  <!-- 라우터 대신 캐러셀이 들어간다. -->
  <!-- 라우터 안 쓰는 것으로 결정되면 npm uninstall 하자. -->
  <div>
    <main-carousel />
  </div>
</template>

<script>
import MainCarousel from '@/components/carousel/MainCarousel.vue';

export default {
  name: 'App',

  components: { MainCarousel },
};
</script>

<style lang="scss"></style>
