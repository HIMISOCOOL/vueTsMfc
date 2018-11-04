module.exports = {
    chainWebpack: webpackConfig => {

        webpackConfig.module
            .rule('html')
                .test(/\.html$/)
                    .exclude.add(/index\.html/)
                    .end()
                .use('vue-template')
                    .loader('vue-template-loader')
                    .options({scoped: true})
                    .end()
                .end()
            .rule('scss')
                .oneOf('normal')
                .enforce('post')
                    .end()
                .end()
            .end()
    },
    css: {
        sourceMap: true,
        loaderOptions: {
          sass: {
            data: '@import "./src/styles/variables.scss";\n@import "./src/styles/mixins.scss";'
          }
        }
      },
  
      runtimeCompiler: true
}