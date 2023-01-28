import { defineComponent, useSlots, ref, computed } from 'vue'
import type { VNode } from 'vue'

import MtStepOverlay from './MtStepOverlay.vue'
import './MtStep.scss'

const MtStep = defineComponent({
  props: {
    isEnabledAutoPlay: {
      type: Boolean,
      default: true,
    },
    modelValue: {
      type: Number,
      required: false,
    },
  },
  emits: {
    close: null,
    'update:modelValue': null,
  },
  setup(props, { emit }) {
    const slots = useSlots()

    const isClosed = () => {
      const slot = (slots.default!()[0].children ?? slots.default!()) as VNode[]
      return currentStepIndex.value >= slot.length - 1
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
            set(value: number) {
              if (isClosed()) {
                emitClose()
                return
              }
              emit('update:modelValue', value)
            },
          })

    const handleClick = () => {
      if (!props.isEnabledAutoPlay) return
      if (props.modelValue === undefined && isClosed()) emitClose()
      currentStepIndex.value += 1
    }

    const renderResult = computed(() => {
      if (!slots.default) return ''
      if (!slots.default()[0]) return ''
      const slot = (slots.default()[0].children ?? slots.default()) as VNode[]
      if (currentStepIndex.value >= slot.length) return ''

      return (
        <div class="mt-step" onClick={handleClick}>
          <MtStepOverlay />
          {slot[currentStepIndex.value]}
        </div>
      )
    })

    return () => renderResult.value
  },
})

export default MtStep
