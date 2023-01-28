<template>
  <div class="usage-example">
    <button class="usage-example__button" @click="showStep = true">
      show demo
    </button>

    <MtStep v-if="showStep">
      <MtStepItem
        :stepItem="[
          {
            selector: '#get-started',
            hint: { text: 'This is a title' },
          },
        ]"
      />
      <MtStepItem
        :stepItem="[
          {
            selector: '.usage-example__button',
            hint: { text: 'This is a button' },
          },
        ]"
      />
    </MtStep>
  </div>
</template>

<script setup lang="ts">
import 'mt-step/css'
import { MtStep, MtStepItem } from 'mt-step'

import { ref } from 'vue'

const showStep = ref(false)
</script>

<style lang="scss">
.usage-example {
  &__button {
    background-color: #00b9e1;
    color: #fff;
    border-radius: 4px;
    padding: 8px;
  }
}
</style>
