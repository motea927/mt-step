import { defineComponent, useSlots, ref, defineEmits } from 'vue'
import MtStepOverlay from './MtStepOverlay.vue'
import './MtStep.scss'

const MtStep = defineComponent({
  setup(_props, { emit }) {
    const currentStepIndex = ref(0)
    const slots = useSlots()

    const handleClick = () => {
      currentStepIndex.value += 1
      if (currentStepIndex.value >= slots.default!().length) {
        emit('close')
      }
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
