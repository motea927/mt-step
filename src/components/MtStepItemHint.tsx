import { defineComponent, computed, h } from 'vue-demi'
import { useRect } from '@/composables/useRect'
import type { PropType } from 'vue-demi'

import './MtStepItemHint.scss'

const MtStepItemHint = defineComponent({
  props: {
    selector: { type: String as PropType<string>, required: true },
    hint: {
      type: Object as PropType<{
        text: string
        position?: 'top' | 'right' | 'bottom' | 'left'
      }>,
      required: true,
    },
  },

  setup(props) {
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

    return () =>
      h(
        'div',
        {
          class: [
            'mt-step-item-hint',
            `mt-step-item-hint--${props.hint.position ?? 'top'}`,
          ],
          style: positionStyle.value,
        },
        props.hint.text
      )
  },
})

export default MtStepItemHint
