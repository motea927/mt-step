<template>
  <div class="mt-step-item-highlight" :style="positionStyle"></div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRect } from './composables/useRect'

const props = defineProps<{
  selector: string
  hint?: {
    text: string
  }
}>()

const { element, rect } = useRect(props.selector)

const positionStyle = computed(() => {
  const { top, right, bottom, left, width, height } = rect.value
  return {
    top: `${top}px`,
    right: `${right}px`,
    bottom: `${bottom}px`,
    left: `${left}px`,
    width: `${width}px`,
    height: `${height}px`,
  }
})

const originalPosition = ref('')
const originalZIndex = ref('')
onMounted(() => {
  if (!element.value) return

  const { position, zIndex } = window.getComputedStyle(element.value)
  const newZIndex = window
    .getComputedStyle(document.querySelector('.mt-step') as Element)
    .getPropertyValue('--z-index-highlight')

  originalPosition.value = position
  originalZIndex.value = zIndex

  if (originalPosition.value === 'static') {
    element.value.style.position = 'relative'
  }
  element.value.style.zIndex = newZIndex
})

onBeforeUnmount(() => {
  if (!element.value) return
  element.value.style.position = originalPosition.value
  element.value.style.zIndex = originalZIndex.value
})
</script>

<style lang="scss">
.mt-step-item-highlight {
  display: block;
  position: absolute;
  background-color: rgb(255, 255, 255);
  z-index: var(--z-index-highlight);
  scale: 1.06;
  border-radius: 8px;
}
</style>
