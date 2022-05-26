import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    vueJsx(),
    autoImport({
      imports: [
        'vue',
        'vue/macros',
        'vue-router',
        'pinia',
        '@vueuse/core',
        '@vueuse/head',
        'vitest',
      ],
      dirs: ['src/composables', 'src/store'],
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true,
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: 'readonly',
      },
    }),
    components({
      dts: 'src/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
