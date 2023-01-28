<script setup lang="ts">
import { ref } from 'vue'

import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import MtStep from '../src/MtStep'
import MtStepItem from '../src/MtStepItem.vue'

const showStep = ref(false)
const index = ref(0)

const clickShow = () => {
  showStep.value = true
}

const handleClose = () => {
  showStep.value = false
  index.value = 0
}
</script>

<template>
  <header>
    <img
      id="logo"
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld id="hello-world" msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
    <button id="show" @click="clickShow">show</button>
    <MtStep v-if="showStep" class="playground-mt-step" @close="handleClose">
      <MtStepItem
        :step-item="[
          {
            selector: '#logo',
            hint: {
              text: `這是LOGO`,
            },
          },
          {
            selector: '#hello-world',
            hint: {
              text: '這是哈囉',
              position: 'bottom',
            },
          },
        ]"
      />
      <MtStepItem :step-item="[{ selector: '#show' }]" />
    </MtStep>
  </main>
</template>

<style lang="scss">
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.playground-mt-step .mt-step-item-highlight {
  background-color: #444;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
