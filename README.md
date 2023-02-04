# mt-step

A lightweight, highly customizable's Vue component to help user step by step focus on the page.

![image](https://raw.githubusercontent.com/motea927/mt-step/master/assets/demo.gif)

## 🚀 Features

- ⚡ **Lightweight**: Bundle size <3kb when gzipped.
- 🧩 **Customizable**: Configurable z-index to fit any project.
- 👍 **Vue Component**: Work for Vue 2 and Vue 3.
- 🧶 **Highlighting multiple element**: Support highlighting single or multiple element on a step.
- 🔌 **Flexible**: Support no hint, single hint, multiple hint on a step and single hint corresponds multiple highlight.
- 🦾 **Type Strong**: Written in TypeScript.

## 🏎 Usage

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

## 📦 Install

```bash
yarn add mt-step
```
