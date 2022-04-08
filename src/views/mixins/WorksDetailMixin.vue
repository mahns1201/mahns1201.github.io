<template>
  <div class="works-detail">
    <div class="works-detail__header">
      <div class="works-detail__header__title">{{ title }}</div>
      <router-link :to="{ path: '/' }">↩︎</router-link>
    </div>
  </div>
</template>

<script>
import WorksData from '@/db/works-data.json';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },

  created() {
    console.log('data => ', Object.keys(WorksData));
    console.log('data => ', Object.keys(WorksData) === this.title);
  },
};
</script>

<style></style>
