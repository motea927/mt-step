import {
  defineComponent,
  useSlots,
  ref,
  computed,
  nextTick,
  install,
} from 'vue-demi'
import type { PropType, VNode } from 'vue-demi'

import { ShapeFlags } from '../types'

import MtStepOverlay from '@/components/MtStepOverlay'
import './MtStep.scss'

install()

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
  setup(props, { emit }) {
    const slots = useSlots()

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
      if (!slots.default()[0]) return []

      const renderSlots: VNode[] = []
      const slot = slots
        .default()
        .filter(
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

      return (
        <div class="mt-step" onClick={handleClick}>
          <MtStepOverlay />
          {calculateSlots.value[currentStepIndex.value]}
        </div>
      )
    })

    return () => renderResult.value
  },
})

export default MtStep
