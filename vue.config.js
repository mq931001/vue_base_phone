module.exports = {
    publicPath: './', // 打包文件目录
    outputDir: 'dist', // 打包文件名字
    assetsDir: 'static', // 放置生成的静态资源文件
    productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，
    你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
    filenameHashing: false, 
    // 代理
    devServer: {
        open: true, // 自动打开浏览器
        port: 9527,  // 监听端口
        hotOnly: true, // 热更新
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: 'http://192.168.106.88:86', // 需要跨域的地址
                changeOrigin: true,                 // 是否开启跨域
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: 'api'  // 实际的接口是否有VUE_APP_BASE_API变量名字的字符
                  } 
            }
        }
    }
}