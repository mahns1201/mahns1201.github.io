<template>
  <main class="adjustment adjustment-gap">
    <profile-section />
    <hr />

    <introduce-section />
    <hr />

    <works-section />
    <hr />

    <section>
      <h2>Other Experiences</h2>
    </section>
  </main>
</template>

<script>
import ProfileSection from '@/components/section/ProfileSection';
import IntroduceSection from '@/components/section/IntroduceSection';
import WorksSection from '@/components/section/WorksSection';

export default {
  name: 'App',

  components: {
    ProfileSection,
    IntroduceSection,
    WorksSection,
  },

  methods: {
    click() {
      console.log(this.$refs);
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/main';

.test {
  overflow: hidden;
  .layout {
    display: flex;
    overflow: hidden;
    width: 300vw;
    height: 100%;

    .page {
      width: 100vw;
      float: left;
    }
  }
}
</style>
