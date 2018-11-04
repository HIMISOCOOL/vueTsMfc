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
            .rule('css')
                .oneOf('normal-post')
                .enforce('post')
                    .use('vue-style-loader')
                    .loader('vue-style-loader')
                    .options({ sourceMap: true, shadowMode: false })
                    .end()
                .use('css-loader')
                    .loader('css-loader')
                    .options({ sourceMap: true, importLoaders: 2 })
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
  
      devServer: {
          proxy: {
              '/api': {
                  target: 'http://localhost:50205'
              },
          }
      },
  
      runtimeCompiler: true
}