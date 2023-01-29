<template>
  <div class="multiple-elements-one-step">
    <BaseButton @click="showStep = true" />

    <MtStep v-if="showStep" @close="showStep = false">
      <MtStepItem
        :stepItem="[
          {
            selector: 'header',
            hint: { text: 'This is header', position: 'bottom' },
          },
          {
            selector: '.aside-nav',
            hint: {
              text: 'This is nav, two highlight elements on same step',
              position: 'right',
            },
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
