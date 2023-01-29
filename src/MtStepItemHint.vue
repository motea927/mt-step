<template>
  <div
    :class="[
      'mt-step-item-hint',
      `mt-step-item-hint--${props.hint?.position ?? 'top'}`,
    ]"
    :style="positionStyle"
  >
    {{ hint?.text }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRect } from './composables/useRect'

const props = defineProps<{
  selector: string
  hint?: {
    text: string
    position?: 'top' | 'right' | 'bottom' | 'left'
  }
}>()

const { rect } = useRect(props.selector)

const positionStyle = computed(() => {
  const { top, left, width, height } = rect.value
  const position = props.hint?.position ?? 'top'
  const styleMap = {
    top: {
      top: `${top}px`,
      left: `${left + width / 2}px`,
    },
    right: {
      top: `${top + height / 2}px`,
      left: `${left + width}px`,
    },
    bottom: {
      top: `${top + height}px`,
      left: `${left + width / 2}px`,
    },
    left: {
      top: `${top + height / 2}px`,
      left: `${left}px`,
    },
  }

  return styleMap[position]
})
</script>

<style lang="scss">
.mt-step-item-hint {
  position: absolute;
  background-color: #fff;
  padding: 8px;
  border-radius: 4px;
  z-index: var(--z-index-hint);
  color: #666;

  &::after {
    content: '';
    position: absolute;
    border: 5px solid #fff;
  }

  &--top {
    transform: translate(-50%, calc(-100% - 20px));
  }

  &--top::after {
    border-color: #fff transparent transparent;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  &--right {
    transform: translate(20px, calc(-50%));
  }

  &--right::after {
    border-color: transparent #fff transparent transparent;
    top: 50%;
    left: -10px;
    transform: translateY(-50%);
  }

  &--bottom {
    transform: translate(-50%, 20px);
  }

  &--bottom::after {
    border-color: transparent transparent #fff;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  &--left {
    transform: translate(calc(-100% - 20px), -50%);
  }

  &--left::after {
    border-color: transparent transparent transparent #fff;
    top: 50%;
    right: -10px;
    transform: translateY(-50%);
  }
}
</style>
