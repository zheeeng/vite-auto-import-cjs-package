import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react-refresh'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Inspect from 'vite-plugin-inspect'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    React(),
    Inspect(),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
    }),
    AutoImport({
      imports: [
        'react',
        'react-router-dom',
        {
          '@pixi/app': ['Application'],
          '@pixi/constants': ['ENV'],
          '@pixi/core': ['Filter'],
          '@pixi/display': ['DisplayObject'],
          '@pixi/graphics': ['Graphics'],
          '@pixi/interaction': ['InteractionEvent'],
          '@pixi/loaders': ['Loader'],
          '@pixi/math': ['Circle'],
          '@pixi/runner': ['Runner'],
          '@pixi/settings': ['settings'],
          '@pixi/sprite': ['Sprite'],
          '@pixi/text': ['Text'],
          '@pixi/ticker': ['Ticker'],
          '@pixi/utils': ['EventEmitter'],
        },
      ],
      dts: './src/auto-imports.d.ts',
      resolvers: [
        IconsResolver({
          componentPrefix: 'Icon',
        }),
      ],
    }),
  ],
})
