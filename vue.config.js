module.exports = {
  outputDir: './docs',
  publicPath: '',

  css: {
    loaderOptions: {
      scss: {
        additionalData: `
            @import "@/styles/main.scss";
            `,
      },
    },
  },
};
