import {
  defineComponent,
  computed,
  ref,
  onMounted,
  onBeforeUnmount,
  h,
} from 'vue-demi'
import type { PropType } from 'vue-demi'
import { useRect } from '@/composables/useRect'
import './MtStepItemHighlight.scss'

const MtStepItemHighlight = defineComponent({
  props: {
    selector: {
      type: String as PropType<string>,
      required: true,
    },
    isPointerEventsDisabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(props) {
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
    const originalPointerEvents = ref('')

    onMounted(() => {
      if (!element.value) return

      const { position, zIndex, pointerEvents } = window.getComputedStyle(
        element.value
      )

      const newZIndex = window
        .getComputedStyle(document.querySelector('.mt-step') as Element)
        .getPropertyValue('--z-index-highlight')

      originalPosition.value = position
      originalZIndex.value = zIndex
      originalPointerEvents.value = pointerEvents

      if (!originalPosition.value || originalPosition.value === 'static') {
        element.value.style.position = 'relative'
      }
      element.value.style.zIndex = newZIndex

      if (props.isPointerEventsDisabled) {
        element.value.style.pointerEvents = 'none'
      }
    })

    onBeforeUnmount(() => {
      if (!element.value) return
      element.value.style.position = originalPosition.value
      element.value.style.zIndex = originalZIndex.value
      element.value.style.pointerEvents = originalPointerEvents.value
    })

    return () =>
      h('div', {
        class: 'mt-step-item-highlight',
        style: positionStyle.value,
      })
  },
})

export default MtStepItemHighlight
