<template>
  <div class="single-example-with-hint-multiple-step">
    <BaseButton @click="showStep = true" />

    <MtStep v-if="showStep" @close="showStep = false">
      <MtStepItem
        :stepItem="[
          {
            selector: '#single-element-with-hint-one-step',
            hint: { text: 'This is title 1' },
          },
        ]"
      />
      <MtStepItem
        :stepItem="[
          {
            selector: '#single-element-with-hint-multiple-step',
            hint: { text: 'This is title 2' },
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
