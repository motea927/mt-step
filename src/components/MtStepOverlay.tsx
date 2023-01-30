import { defineComponent } from 'vue-demi'

import '@/components/MtStepOverlay.scss'

const MtStepOverlay = defineComponent({
  setup() {
    return () => <div class="mt-step-overlay"></div>
  },
})

export default MtStepOverlay
