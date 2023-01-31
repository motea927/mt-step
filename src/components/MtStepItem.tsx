import { defineComponent, h } from 'vue-demi'
import type { PropType } from 'vue-demi'

import MtStepItemHighlight from '@/components/MtStepItemHighlight'
import MtStepItemHint from '@/components/MtStepItemHint'

const MtStepItem = defineComponent({
  props: {
    stepItem: {
      type: Array as PropType<
        {
          selector: string
          hint?: {
            text: string
            position?: 'top' | 'right' | 'bottom' | 'left'
          }
        }[]
      >,
      required: true,
    },
  },
  setup(props) {
    return () =>
      h('div', { class: 'mt-step-item' }, [
        props.stepItem.map((stepItem, index) => {
          return h(MtStepItemHighlight, null, {
            key: `${stepItem.selector}${index}`,
            ...stepItem,
          })
        }),
        props.stepItem
          .filter((stepItem) => stepItem.hint)
          .map((stepItem, index) => {
            return h(MtStepItemHint, null, {
              key: `${stepItem.selector}${index}`,
              selector: stepItem.selector,
              hint: stepItem.hint!,
            })
          }),
      ])
  },
})
export default MtStepItem
