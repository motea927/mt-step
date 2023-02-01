import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MtStep from '@/components/MtStep'

const slots = {
  default: ['<div id="one">One</div>', '<div id="two">Two</div>'],
}

describe('MtStep', () => {
  it('Should include overlay', () => {
    const wrapper = mount(MtStep, { slots })
    const overlayElement = wrapper.find('.mt-step-overlay')
    expect(overlayElement.exists()).toEqual(true)
  })

  it('should render single step at same time', () => {
    const wrapper = mount(MtStep, { slots })
    const html = wrapper.html()
    expect(html).toContain(slots.default[0])
    expect(html).not.toContain(slots.default[1])
  })

  it('should autoplay when props isEnabledAutoPlay is true', async () => {
    const wrapper = mount(MtStep, {
      props: { isEnabledAutoPlay: true },
      slots,
    })
    await wrapper.find('.mt-step-overlay').trigger('click')

    expect(wrapper.html()).toContain(slots.default[1])
  })

  it('should not autoplay when props isEnabledAutoPlay is false', async () => {
    const wrapper = mount(MtStep, {
      props: { isEnabledAutoPlay: false },
      slots,
    })

    await wrapper.find('.mt-step-overlay').trigger('click')
    expect(wrapper.html()).toContain(slots.default[0])
  })

  it('props modelValue can work', () => {
    const wrapper = mount(MtStep, {
      props: { modelValue: 1 },
      slots,
    })

    expect(wrapper.html()).toContain(slots.default[1])
  })

  it('when update step index, should emit update:modelValue event', async () => {
    const wrapper = mount(MtStep, {
      props: { modelValue: 0 },
      slots,
    })

    await wrapper.find('.mt-step-overlay').trigger('click')
    const updateEvent = wrapper.emitted('update:modelValue')
    expect(updateEvent).toHaveLength(1)
  })

  it('Should emit close event when current stepIndex over slots.length', async () => {
    const wrapper = mount(MtStep, {
      slots,
    })

    await wrapper.find('.mt-step-overlay').trigger('click')
    await wrapper.find('.mt-step-overlay').trigger('click')
    const closeEvent = wrapper.emitted('close')
    expect(closeEvent).toHaveLength(1)
  })
})
