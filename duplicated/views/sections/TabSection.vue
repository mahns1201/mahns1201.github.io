<template>
  <nav class="tab">
    <select v-model="tab" name="tab" id="tab">
      <option value="history">History</option>
      <option value="skills">Skills</option>
      <option value="works">Works</option>
    </select>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      tab: '',
    };
  },

  watch: {
    tab() {
      this.$store.commit('changeTab', this.tab);
    },
  },

  created() {
    this.tab = this.$store.state.tab;
    console.log('index-page: ', this.$store.state);
  },
};
</script>
