<template>
  <main class="adjustment">
    <profile-section />

    <section>
      <h2>Skills</h2>
    </section>

    <section>
      <h2>Work Experiences</h2>
    </section>

    <section>
      <h2>Awards</h2>
    </section>
  </main>
</template>

<script>
import ProfileSection from '@/components/section/ProfileSection';

export default {
  name: 'App',

  components: {
    ProfileSection,
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
