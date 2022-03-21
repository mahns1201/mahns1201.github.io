module.exports = {
  outputDir: './docs',
  publicPath: '',

  css: {
    loaderOptions: {
      scss: {
        data: `
            @import "@/styles/style.scss";
            `,
      },
    },
  },
};
