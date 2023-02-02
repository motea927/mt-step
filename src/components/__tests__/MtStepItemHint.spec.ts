import { describe, beforeEach, afterEach, it, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import MtStepItemHint from '@/components/MtStepItemHint'

const mountElement = (hintPosition?: 'top' | 'right' | 'bottom' | 'left') =>
  mount(MtStepItemHint, {
    props: {
      selector: '#test',
      hint: {
        text: 'something',
        ...(hintPosition && { position: hintPosition }),
      },
    },
  })

describe('MtStepItemHint', () => {
  beforeEach(() => {
    // Create a target element for testing
    const targetElement = document.createElement('div')
    targetElement.id = 'test'
    document.body.appendChild(targetElement)
    targetElement.style.position = ''
  })

  afterEach(() => {
    // Remove the target element after testing
    ;['#test'].forEach((selector) => {
      const targetElement = document.querySelector(selector)
      document.body.removeChild(targetElement as Element)
    })
  })

  it('Render correct hint text', () => {
    const wrapper = mountElement()
    expect(wrapper.html()).toContain('something')
  })

  it('props.hint.position is optional, default is top', () => {
    const wrapper = mountElement()
    expect(wrapper.html()).toContain('mt-step-item-hint--top')
    expect(wrapper.element).toMatchSnapshot()
  })

  test.each(['top', 'right', 'bottom', 'left'] as const)(
    'render correct className with props.hint.position %s',
    (position) => {
      const wrapper = mountElement(position)
      expect(wrapper.html()).toContain(position)
      expect(wrapper.element).toMatchSnapshot()
    }
  )
})
