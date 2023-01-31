import { defineComponent, h, isVue2 } from 'vue-demi'
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
    console.log(isVue2)
    console.log(props.stepItem)
    return () =>
      h(
        'div',
        { class: 'mt-step-item' },

        [
          ...props.stepItem.map((stepItem, index) => {
            return h(MtStepItemHighlight, {
              key: `highlight-${stepItem.selector}${index}`,
              selector: stepItem.selector,
            })
          }),
          // ...props.stepItem
          //   .filter((stepItem) => stepItem.hint)
          //   .map((stepItem, index) => {
          //     return h(MtStepItemHint, {
          //       key: `hint-${stepItem.selector}${index}`,
          //       props: {
          //         selector: stepItem.selector,
          //         hint: stepItem.hint!,
          //       },
          //     })
          //   }),
        ]
      )
  },
})
export default MtStepItem
