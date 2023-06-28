// vite.config.ts
import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import vue from "file:///F:/vue-components/ikunui/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { defineConfig } from "file:///F:/vue-components/ikunui/node_modules/vite/dist/node/index.js";
import dts from "file:///F:/vue-components/ikunui/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "F:\\vue-components\\ikunui";
var __vite_injected_original_import_meta_url = "file:///F:/vue-components/ikunui/vite.config.ts";
var vite_config_default = defineConfig({
  // base: '/packages',
  plugins: [
    vue(),
    dts({
      // root: '.',
      outputDir: "./dist",
      // 是否将动态引入转换为静态
      staticImport: true,
      // cleanVueFileName: true,
      copyDtsFiles: true,
      entryRoot: "index.ts",
      tsConfigFilePath: "tsconfig.app.json",
      // 是否生成类型声明入口
      insertTypesEntry: true,
      // 设置是否在发出类型文件后将其打包
      rollupTypes: true
    })
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__vite_injected_original_dirname, "./src/index.ts"),
      name: "ikunui",
      // formats: ['es', 'cjs'],
      // the proper extensions will be added
      fileName: "index"
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue"
        },
        exports: "named"
      }
    }
  },
  server: {
    open: true
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./packages", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFx2dWUtY29tcG9uZW50c1xcXFxpa3VudWlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXHZ1ZS1jb21wb25lbnRzXFxcXGlrdW51aVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovdnVlLWNvbXBvbmVudHMvaWt1bnVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCc7XHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJztcclxuXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgLy8gYmFzZTogJy9wYWNrYWdlcycsXHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBkdHMoe1xyXG4gICAgICAvLyByb290OiAnLicsXHJcbiAgICAgIG91dHB1dERpcjogJy4vZGlzdCcsXHJcbiAgICAgIC8vIFx1NjYyRlx1NTQyNlx1NUMwNlx1NTJBOFx1NjAwMVx1NUYxNVx1NTE2NVx1OEY2Q1x1NjM2Mlx1NEUzQVx1OTc1OVx1NjAwMVxyXG4gICAgICBzdGF0aWNJbXBvcnQ6IHRydWUsXHJcbiAgICAgIC8vIGNsZWFuVnVlRmlsZU5hbWU6IHRydWUsXHJcbiAgICAgIGNvcHlEdHNGaWxlczogdHJ1ZSxcclxuICAgICAgZW50cnlSb290OiAnaW5kZXgudHMnLFxyXG4gICAgICB0c0NvbmZpZ0ZpbGVQYXRoOiAndHNjb25maWcuYXBwLmpzb24nLFxyXG4gICAgICAvLyBcdTY2MkZcdTU0MjZcdTc1MUZcdTYyMTBcdTdDN0JcdTU3OEJcdTU4RjBcdTY2MEVcdTUxNjVcdTUzRTNcclxuICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcclxuICAgICAgLy8gXHU4QkJFXHU3RjZFXHU2NjJGXHU1NDI2XHU1NzI4XHU1M0QxXHU1MUZBXHU3QzdCXHU1NzhCXHU2NTg3XHU0RUY2XHU1NDBFXHU1QzA2XHU1MTc2XHU2MjUzXHU1MzA1XHJcbiAgICAgIHJvbGx1cFR5cGVzOiB0cnVlLFxyXG4gICAgfSlcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBsaWI6IHtcclxuICAgICAgLy8gQ291bGQgYWxzbyBiZSBhIGRpY3Rpb25hcnkgb3IgYXJyYXkgb2YgbXVsdGlwbGUgZW50cnkgcG9pbnRzXHJcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2luZGV4LnRzJyksXHJcbiAgICAgIG5hbWU6ICdpa3VudWknLFxyXG4gICAgICAvLyBmb3JtYXRzOiBbJ2VzJywgJ2NqcyddLFxyXG4gICAgICAvLyB0aGUgcHJvcGVyIGV4dGVuc2lvbnMgd2lsbCBiZSBhZGRlZFxyXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcclxuXHJcblxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgLy8gXHU3ODZFXHU0RkREXHU1OTE2XHU5MEU4XHU1MzE2XHU1OTA0XHU3NDA2XHU5MEEzXHU0RTlCXHU0RjYwXHU0RTBEXHU2MEYzXHU2MjUzXHU1MzA1XHU4RkRCXHU1RTkzXHU3Njg0XHU0RjlEXHU4RDU2XHJcbiAgICAgIGV4dGVybmFsOiBbJ3Z1ZSddLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAvLyBcdTU3MjggVU1EIFx1Njc4NFx1NUVGQVx1NkEyMVx1NUYwRlx1NEUwQlx1NEUzQVx1OEZEOVx1NEU5Qlx1NTkxNlx1OTBFOFx1NTMxNlx1NzY4NFx1NEY5RFx1OEQ1Nlx1NjNEMFx1NEY5Qlx1NEUwMFx1NEUyQVx1NTE2OFx1NUM0MFx1NTNEOFx1OTFDRlxyXG4gICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgIHZ1ZTogJ1Z1ZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBleHBvcnRzOiBcIm5hbWVkXCJcclxuICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBvcGVuOiB0cnVlLFxyXG4gIH0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vcGFja2FnZXMnLCBpbXBvcnQubWV0YS51cmwpKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnUSxTQUFTLGVBQWU7QUFDeFIsU0FBUyxlQUFlLFdBQVc7QUFFbkMsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUxoQixJQUFNLG1DQUFtQztBQUFvSCxJQUFNLDJDQUEyQztBQVE5TSxJQUFPLHNCQUFRLGFBQWE7QUFBQTtBQUFBLEVBRTFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQTtBQUFBLE1BRUYsV0FBVztBQUFBO0FBQUEsTUFFWCxjQUFjO0FBQUE7QUFBQSxNQUVkLGNBQWM7QUFBQSxNQUNkLFdBQVc7QUFBQSxNQUNYLGtCQUFrQjtBQUFBO0FBQUEsTUFFbEIsa0JBQWtCO0FBQUE7QUFBQSxNQUVsQixhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBO0FBQUEsTUFFSCxPQUFPLFFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsTUFDMUMsTUFBTTtBQUFBO0FBQUE7QUFBQSxNQUdOLFVBQVU7QUFBQSxJQUdaO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBO0FBQUEsUUFFTixTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLFFBQ0EsU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUVGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksY0FBYyx3Q0FBZSxDQUFDO0FBQUEsSUFDM0Q7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
