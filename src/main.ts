import MtStep from '@/MtStep'
import MtStepItem from '@/MtStepItem.vue'

const isDev = import.meta.env.MODE === 'development'
if (isDev) {
  const { createApp } = await import('vue')
  const PlayGroundApp = (await import('../playground/App.vue')).default
  await import('../playground/assets/main.css')
  createApp(PlayGroundApp).mount('#app')
}

export { MtStep, MtStepItem }
