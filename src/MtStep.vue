<template>
  <div class="mt-step">
    <MtStepOverlay></MtStepOverlay>
    <MtStepHighlight
      v-for="(currentStepInfo, index) in currentStep"
      :key="`${currentStepInfo.selector}${index}`"
      :="currentStepInfo"
    ></MtStepHighlight>
  </div>
</template>

<script setup lang="ts">
import MtStepOverlay from './MtStepOverlay.vue'
import MtStepHighlight from './MtStepHighlight.vue'
import { ref, computed } from 'vue'

export interface Props {
  steps: { selector: string; hintText?: string }[][]
}

const props = withDefaults(defineProps<Props>(), {})
const currentStepIndex = ref(0)

const currentStep = computed(() => props.steps[currentStepIndex.value])
</script>

<style lang="scss">
.mt-step {
  position: fixed;
  inset: 0;
}
</style>
