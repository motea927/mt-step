<template>
  <div class="mt-step-highlight" :style="positionStyle"></div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{
  selector: string
  hintText?: string
}>()

const element = ref<HTMLElement | null>(null)
const rect = ref({
  x: 0,
  y: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: 0,
  height: 0,
})

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
  const el = document.querySelector(props.selector) as HTMLElement | null
  if (!el) {
    console.warn(`${props.selector} not found. maybe typo?`)
    return
  }
  element.value = el
  rect.value = el.getBoundingClientRect()
  const { position, zIndex } = window.getComputedStyle(el)
  originalPosition.value = position
  originalZIndex.value = zIndex

  if (originalPosition.value === 'static') {
    el.style.position = 'relative'
  }
  el.style.zIndex = '100004'
})

onBeforeUnmount(() => {
  if (!element.value) return
  element.value.style.position = originalPosition.value
  element.value.style.zIndex = originalZIndex.value
})
</script>

<style lang="scss">
.mt-step-highlight {
  display: block;
  position: absolute;
  background-color: rgb(255, 255, 255);
  z-index: 100003 !important;
}
</style>
