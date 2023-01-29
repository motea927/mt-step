<template>
  <div class="single-example-with-hint-one-step">
    <BaseButton @click="showStep = true" />

    <MtStep v-if="showStep" @close="showStep = false">
      <MtStepItem
        :stepItem="[
          {
            selector: 'header',
            hint: { text: 'This header', position: 'bottom' },
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

<style lang="scss"></style>
