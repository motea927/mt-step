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
  setup(props, { slots }) {
    return () =>
      h(
        'div',
        { class: 'mt-step-item' },

        [
          ...props.stepItem.map((stepItem, index) => {
            const props = { selector: stepItem.selector }
            return h(MtStepItemHighlight, {
              key: `highlight-${stepItem.selector}${index}`,
              ...props,
              // for vue 2
              props,
            })
          }),
          ...props.stepItem
            // .filter((stepItem) => stepItem.hint)
            .map((stepItem, index) => {
              const props = {
                ...stepItem,
              }

              if (slots[`hint-${index}`]) {
                return h(
                  MtStepItemHint,
                  {
                    key: `hint-${stepItem.selector}${index}`,
                    ...props,
                    props,
                  },
                  slots[`hint-${index}`]
                )
              }

              if (stepItem.hint) {
                return h(MtStepItemHint, {
                  key: `hint-${stepItem.selector}${index}`,
                  ...props,
                  props,
                })
              }

              return ''
            }),
        ]
      )
  },
})
export default MtStepItem
