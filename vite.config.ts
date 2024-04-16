/*
 * @Author: yangmiaomiao
 * @Date: 2024-04-09 20:07:30
 * @LastEditors: yangmiaomiao
 * @LastEditTime: 2024-04-13 15:21:43
 * @Description:
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteCompression({
            verbose: true, //是否在控制台中输出压缩结果
            disable: false, //是否禁用
            threshold: 1048576, //如果体积大于阈值，则进行压缩，单位为b
            algorithm: 'gzip', //压缩算法，可选['gzip'，'brotliCompress'，'deflate'，'deflateRaw']
            ext: '.gz', //生成的压缩包的后缀
            deleteOriginFile: true, //压缩后是否删除源文件
        }),
    ],
    base: './',
    resolve: {
        // 配置路径别名
        alias: {
            '@': resolve(__dirname, '/src'), // 设置别名
            '@pages': resolve(__dirname, 'src', 'pages'),
            '@components': resolve(__dirname, 'src', 'components'),
            '@stores': resolve(__dirname, 'src', 'stores'),
            '@utils': resolve(__dirname, 'src', 'utils'),
            '@services': resolve(__dirname, 'src', 'services'),
        },

        // https://cn.vitejs.dev/config/#resolve-extensions
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'], // 导入时想要省略的扩展名列表
    },
    css: {
        preprocessorOptions: {
            // 导入scss预编译程序
            scss: {
                additionalData: `@import "./src/styles/variables.scss";`,
            },
        },
    },
    server: {
        port: 3000, //启动端口
        host: true,
        hmr: true,
        watch: {
            usePolling: true, // 修复HMR热更新失效
        },
        open: true, //是否自动在浏览器打开
        proxy: {
            '/mock': {
                target: 'http://127.0.0.1:4523/m1/3915073-0-default/mock',
                changeOrigin: true,
                ws: true,
                rewrite: (path) => path.replace(/^\/mock/, ''),
            },
        },
    },
    build: {
        outDir: 'build', // 打包文件的输出目录
        assetsDir: 'static', // 静态资源的存放目录
        minify: 'esbuild',
        sourcemap: false,
        // 禁用 gzip 压缩大小报告，可略微减少打包时间
        reportCompressedSize: false,
        // 规定触发警告的 chunk 大小
        chunkSizeWarningLimit: 2000,
        rollupOptions: {
            output: {
                // Static resource classification and packaging
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
            },
        },
    },
})
