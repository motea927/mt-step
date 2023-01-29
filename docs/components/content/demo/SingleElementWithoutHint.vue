<template>
  <div class="single-element-without-hint">
    <input
      type="text"
      id="text-input"
      placeholder="input"
      @focus="showStep = true"
    />
    <MtStep v-if="showStep" @close="showStep = false">
      <MtStepItem
        :stepItem="[
          {
            selector: '#text-input',
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

<style>
#text-input {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px;
}
</style>
