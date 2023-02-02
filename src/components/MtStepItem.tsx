import { defineComponent, h, version, computed } from 'vue-demi'
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
    const isVue2 = version[0] === '2'

    const renderHighlight = computed(() => {
      return props.stepItem.map((stepItem, index) => {
        const props = { selector: stepItem.selector }

        return h(MtStepItemHighlight, {
          key: `highlight-${stepItem.selector}${index}`,
          ...props,
          ...(isVue2 && { props }),
        })
      })
    })

    const mainHintSlot = slots['main-hint']

    const renderHint = computed(() => {
      return props.stepItem.map((stepItem, index) => {
        const props = {
          ...stepItem,
        }

        const slotName = `hint-${index}`
        const slot = slots[slotName]
        const renderKey = `hint-${stepItem.selector}${index}`
        if (slot) {
          return h(
            MtStepItemHint,
            {
              key: renderKey,
              ...props,
              ...(isVue2 && { props }),
            },
            isVue2 ? slot!() : slot
          )
        }

        if (stepItem.hint) {
          return h(MtStepItemHint, {
            key: renderKey,
            ...props,
            ...(isVue2 && { props }),
          })
        }

        return ''
      })
    })

    return () =>
      mainHintSlot
        ? h('div', { class: 'mt-step-item' }, [
            ...renderHighlight.value,
            mainHintSlot(),
          ])
        : h('div', { class: 'mt-step-item' }, [
            ...renderHighlight.value,
            ...renderHint.value,
          ])
  },
})
export default MtStepItem
