import { defineComponent, ref, computed, nextTick, h } from 'vue-demi'
import type { PropType, VNode } from 'vue-demi'

import { ShapeFlags } from '../types'

import MtStepOverlay from '@/components/MtStepOverlay'
import './MtStep.scss'

const MtStep = defineComponent({
  props: {
    isEnabledAutoPlay: {
      type: Boolean as PropType<boolean>,
      default: true,
    },
    modelValue: {
      type: Number as PropType<number>,
      required: false,
    },
  },
  emits: ['close', 'update:modelValue'],
  setup(props, { emit, slots }) {
    const isClosed = () => {
      return currentStepIndex.value >= calculateSlots.value.length
    }

    const emitClose = () => {
      emit('close')
    }

    const currentStepIndex =
      props.modelValue === undefined
        ? ref(0)
        : computed<number>({
            get() {
              return props.modelValue ?? 0
            },
            async set(value: number) {
              emit('update:modelValue', value)
              await nextTick()
              if (isClosed()) {
                emitClose()
              }
            },
          })

    const handleClick = () => {
      if (!props.isEnabledAutoPlay) return
      currentStepIndex.value += 1
      if (props.modelValue === undefined && isClosed()) emitClose()
    }

    // when use v-for, flag is ARRAY_CHILDREN, slots will be children
    const calculateSlots = computed(() => {
      if (!slots.default) return []
      const defaultSlots = slots.default()
      if (!defaultSlots[0]) return []

      const isVue2 = !defaultSlots[0].shapeFlag
      if (isVue2) return defaultSlots

      const renderSlots: VNode[] = []
      const slot = defaultSlots.filter(
        (slot) =>
          slot.shapeFlag === ShapeFlags.ARRAY_CHILDREN ||
          slot.shapeFlag === ShapeFlags.STATEFUL_COMPONENT
      )

      slot.forEach((slot) => {
        if (Array.isArray(slot.children) && slot.children.length !== 0) {
          renderSlots.push(...(slot.children as VNode[]))
          return
        }
        renderSlots.push(slot)
      })
      return renderSlots
    })

    const renderResult = computed(() => {
      if (calculateSlots.value.length === 0) return ''
      if (currentStepIndex.value >= calculateSlots.value.length) return ''

      return h(
        'div',
        {
          class: 'mt-step',
          onClick: handleClick,
          on: {
            click: handleClick,
          },
        },
        [h(MtStepOverlay), calculateSlots.value[currentStepIndex.value]]
      )
    })

    return () => renderResult.value
  },
})

export default MtStep
