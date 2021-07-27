module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  chainWebpack: config => {
    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader");
    }
};
