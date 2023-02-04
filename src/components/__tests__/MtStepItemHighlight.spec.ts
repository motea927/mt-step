import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import MtStepItemHighlight from '@/components/MtStepItemHighlight'

const mockZIndex = '799'
const mountElement = (isPointerEventsDisabled?: boolean) =>
  mount(MtStepItemHighlight, {
    propsData: {
      selector: '#test',
      ...(isPointerEventsDisabled && { isPointerEventsDisabled }),
    },
  })
describe('MtStepItemHighlight', () => {
  beforeEach(() => {
    // Create a target element for testing

    const targetElement = document.createElement('div')
    targetElement.id = 'test'
    document.body.appendChild(targetElement)
    targetElement.style.position = ''
    targetElement.style.pointerEvents = ''

    const mtStepELement = document.createElement('div')
    mtStepELement.className = 'mt-step'
    mtStepELement.style.setProperty('--z-index-highlight', mockZIndex)
    document.body.appendChild(mtStepELement)
  })

  afterEach(() => {
    // Remove the target element after testing
    ;['#test', '.mt-step'].forEach((selector) => {
      const targetElement = document.querySelector(selector)
      document.body.removeChild(targetElement as Element)
    })
  })

  it('renders correctly with rect data', () => {
    const wrapper = mountElement()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('updates position and z-index of target element', async () => {
    const wrapper = mountElement()

    const targetElement = document.querySelector('#test') as HTMLElement
    expect(targetElement.style.position).toBe('relative')
    expect(targetElement.style.zIndex).toBe(mockZIndex)
    wrapper.unmount()

    expect(targetElement.style.position).toBe('')
    expect(targetElement.style.zIndex).toBe('')
  })

  it("updates target element's pointer-event when isPointerEventsDisabled", async () => {
    const wrapper = mountElement(true)

    const targetElement = document.querySelector('#test') as HTMLElement
    expect(targetElement.style.pointerEvents).toBe('none')
    wrapper.unmount()
    expect(targetElement.style.pointerEvents).toBe('')
  })

  it('default isPointerEventsDisabled is false', async () => {
    mountElement()
    const targetElement = document.querySelector('#test') as HTMLElement
    expect(targetElement.style.pointerEvents).toBe('')
  })
})
