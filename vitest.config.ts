import { mergeConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      transformMode: {
        web: [/\.[jt]sx$/],
      },
      deps: {
        inline: ['vue2', '@vue/composition-api', 'vue-demi'],
      },
    },
  })
)
