<template>
  <main class="adjustment adjustment-gap">
    <profile-section class="section-border" />

    <hr />

    <introduce-section />

    <hr />

    <section>
      <h2>Work Experiences</h2>
    </section>

    <section>
      <h2>Side Project</h2>
    </section>

    <section>
      <h2>Awards</h2>
    </section>
  </main>
</template>

<script>
import ProfileSection from '@/components/section/ProfileSection';
import IntroduceSection from '@/components/section/IntroduceSection';

export default {
  name: 'App',

  components: {
    ProfileSection,
    IntroduceSection,
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
