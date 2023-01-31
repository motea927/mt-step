import { defineComponent, h } from 'vue-demi'

import '@/components/MtStepOverlay.scss'

const MtStepOverlay = defineComponent({
  setup() {
    return () => h('div', { class: 'mt-step-overlay' })
  },
})

export default MtStepOverlay
