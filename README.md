# mt-step

A lightweight, highly customizable's Vue component to help user step by step focus on the page.

![image](https://raw.githubusercontent.com/motea927/mt-step/master/assets/demo.gif)

## ๐ Features

- โก **Lightweight**: Bundle size <3kb when gzipped.
- ๐งฉ **Customizable**: Configurable z-index to fit any project.
- ๐ **Vue Component**: Work for Vue 2 and Vue 3.
- ๐งถ **Highlighting multiple element**: Support highlighting single or multiple element on a step.
- ๐ **Flexible**: Support no hint, single hint, multiple hint on a step and single hint corresponds multiple highlight.
- ๐ฆพ **Type Strong**: Written in TypeScript.

## ๐ Usage

```vue
<template>
  <MtStep>
    <MtStepItem
      :stepItem="[
        {
          selector: '#get-started',
          hint: { text: 'This is a hint', position: 'bottom' },
        },
      ]"
    />
  </MtStep>
</template>

<script setup lang="ts">
import 'mt-step/css'
import { MtStep, MtStepItem } from 'mt-step'
</script>
```

Refer to [documentations](https://mt-step.morty.tw/) for more details.

## ๐ฆ Install

```bash
yarn add mt-step
```
