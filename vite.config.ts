import { resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/packages',
  plugins: [
    vue(),
    dts({
      // root: '.',
      outputDir: './dist',
      // 是否将动态引入转换为静态
      staticImport: true,
      // cleanVueFileName: true,
      copyDtsFiles: true,
      entryRoot: 'index.ts',
      tsConfigFilePath: 'tsconfig.app.json',
      // 是否生成类型声明入口
      insertTypesEntry: true,
      // 设置是否在发出类型文件后将其打包
      rollupTypes: true,
    })
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './src/index.ts'),
      name: 'ikunui',
      // formats: ['es', 'cjs'],
      // the proper extensions will be added
      fileName: 'index',


    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        exports: "named"
      },

    },
  },
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./packages', import.meta.url))
    }
  }
})
