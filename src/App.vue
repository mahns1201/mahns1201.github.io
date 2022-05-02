<template>
  <!-- 라우터 대신 캐러셀이 들어간다. -->
  <!-- 라우터 안 쓰는 것으로 결정되면 npm uninstall 하자. -->
  <div class="test">
    <div class="layout">
      <div class="page">page1</div>
      <div class="page">page2</div>
      <div class="page">page3</div>
    </div>
  </div>

  <div>
    <button @click="click">1</button>
    <button @click="click">2</button>
    <button @click="click">3</button>
  </div>
</template>

<script>
export default {
  name: 'App',

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
