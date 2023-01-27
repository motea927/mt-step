<template>
  <div class="mt-step-item">
    <template
      v-for="(stepItem, index) in props.stepItem"
      :key="`${stepItem.selector}${index}`"
    >
      <MtStepItemHighlight :="stepItem"></MtStepItemHighlight>
      <MtStepItemHint v-if="stepItem.hint" :="stepItem" />
    </template>
  </div>
</template>

<script setup lang="ts">
import MtStepItemHighlight from './MtStepItemHighlight.vue'
import MtStepItemHint from './MtStepItemHint.vue'

const props = defineProps<{
  stepItem: {
    selector: string
    hint?: {
      text: string
      position?: 'top' | 'right' | 'bottom' | 'left'
    }
  }[]
}>()
</script>

<style lang="scss"></style>
