import { defineComponent, useSlots, ref, computed } from 'vue'
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
  setup(props, { emit }) {
    const slots = useSlots()

    const isClosed = () => currentStepIndex.value >= slots.default!().length
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
              if (isClosed()) emitClose()
              emit('update:modelValue', value)
            },
          })

    const handleClick = () => {
      if (!props.isEnabledAutoPlay) return
      currentStepIndex.value += 1
      if (isClosed()) emitClose()
    }

    return () =>
      slots.default && currentStepIndex.value < slots.default().length ? (
        <div class="mt-step" onClick={handleClick}>
          <MtStepOverlay />
          {slots.default ? slots.default()[currentStepIndex.value] : ''}
        </div>
      ) : (
        ''
      )
  },
})

export default MtStep
