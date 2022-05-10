<template>
  <div>
    <section class="profile">
      <div class="profile__container">
        <img src="https://source.unsplash.com/random/250x250" alt="profile" />
      </div>
      <div class="profile__description">
        <h1>서민혁</h1>
        <h2>팬을 잡는 개발자</h2>
        <p>
          <span>Github</span>
          <a href="https://github.com/mahns1201"
            ><span>https://github.com/mahns1201</span></a
          >
        </p>
        <p>
          <span>Blog</span>
          <a href="https://velog.io/@mahns"
            ><span>https://velog.io/@mahns</span></a
          >
        </p>
        <p><span>Email</span><span>mahns1201@gmail.com</span></p>
      </div>
    </section>

    <section>Skills</section>
    <img
      src="https://img.shields.io/badge/-HTML5-red?style=flat&logo=html5&logoColor=ffffff"
      alt="HTML5"
    />
    <img
      src="https://img.shields.io/badge/-CSS3-blue?style=flat&logo=css3"
      alt="CSS3"
    />
    <img
      src="https://img.shields.io/badge/-SCSS-ff69b4?style=flat&logo=sass&logoColor=ffffff"
      alt="SCSS"
    />
    <img
      src="https://img.shields.io/badge/-Tailwind-blue?style=flat&logo=TailwindCSS"
      alt="Tailwind"
    />
    <img
      src="https://img.shields.io/badge/-JavaScript-yellow?style=flat&logo=javascript"
      alt="JavaScript"
    />
    <img
      src="https://img.shields.io/badge/-Vue.js-green?style=flat&logo=vue.js"
      alt="Vue"
    />
    <img
      src="https://img.shields.io/badge/-Node.js-green?style=flat&logo=node.js&logoColor=ffffff"
      alt="Node"
    />
    <img
      src="https://img.shields.io/badge/-Serverless-red?style=flat&logo=serverless"
      alt="Serverless"
    />
    <img
      src="https://img.shields.io/badge/-Git-white?style=flat&logo=git"
      alt="Git"
    />
    <img
      src="https://img.shields.io/badge/-Java-white?style=flat&logo=java&logoColor=ff0000"
      alt="Java"
    />
    <img
      src="https://img.shields.io/badge/-Spring-green?style=flat&logo=spring&logoColor=ffffff"
      alt="Spring"
    />

    <section>Projects</section>
    <section>Outputs</section>
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
