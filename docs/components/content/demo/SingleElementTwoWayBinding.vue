<template>
  <div class="single-example-with-hint-one-step">
    <BaseButton @click="showStep = true" />

    <MtStep
      v-if="showStep"
      :modelValue="index"
      @update:modelValue="handleUpdateIndex"
    >
      <MtStepItem
        :stepItem="[
          {
            selector: 'header',
            hint: { text: 'Click overlay and wait 2sec', position: 'bottom' },
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
const index = ref(0)
const handleUpdateIndex = async (newIndex: number) => {
  // do something, like Ajax
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // after ajax, update index
  index.value = newIndex

  // edge case. if last step, close step
  if (index.value > 0) {
    showStep.value = false
    index.value = 0
  }
}
</script>

<style lang="scss"></style>
