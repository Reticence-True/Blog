import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 引入svg图标插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 引入 mock
// import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd()) // 获取环境变量信息
    return {
        plugins: [
            vue(),
            createSvgIconsPlugin({
                // 指定要缓存的图标文件夹
                iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
                // 指定 symbolId 格式
                symbolId: 'icon-[dir]-[name]',
            }),
            // viteMockServe({
            //     localEnabled: command === 'serve',
            // }),
        ],
        resolve: {
            extensions: ['.vue', '.ts'],
            alias: {
                '@': path.resolve('./src'), // 相对路径别名配置，使用 @ 代替 src
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    javascriptEnabled: true,
                    additionalData: '@import "./src/styles/variable.scss";',
                },
            },
        },
        // 代理跨域
        server: {
            proxy: {
                [env.VITE_APP_BASE_API]: {
                    target: env.VITE_SERVE, // 获取数据的服务器的地址
                    changeOrigin: true, // 是否代理跨域
                    rewrite: (path) => path.replace(/^\/api/, ''), // 路径重写
                },
            },
        },
    }
})
