import { ref, onMounted, onBeforeUnmount } from 'vue'

export const useRect = (selector: string) => {
  const element = ref<HTMLElement | null>(null)
  const rect = ref({
    x: 0,
    y: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 0,
    height: 0,
  })

  const getElement = () => {
    const el = document.querySelector(selector) as HTMLElement | null
    if (!el) {
      console.warn(`${selector} not found. maybe typo?`)
      return
    }
    element.value = el
  }

  const getRect = () => {
    if (!element.value) return
    rect.value = element.value.getBoundingClientRect()
  }

  onMounted(() => {
    getElement()
    getRect()
    window.addEventListener('resize', getRect, { passive: true })
    window.addEventListener('scroll', getRect, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', getRect)
    window.removeEventListener('scroll', getRect)
  })

  return { element, rect }
}
