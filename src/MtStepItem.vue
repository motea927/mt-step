<template>
  <div class="mt-step-item">
    <MtStepHighlight
      v-for="(stepItem, index) in props.stepItem"
      :key="`${stepItem.selector}${index}`"
      :index="index"
      :="stepItem"
    ></MtStepHighlight>
  </div>
</template>

<script setup lang="ts">
import MtStepHighlight from './MtStepItemHighlight.vue'

const props = defineProps<{
  stepItem: {
    selector: string
    hint?: {
      text: string
    }
  }[]
}>()
</script>

<style lang="scss"></style>
