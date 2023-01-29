import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MtStepItem from '../MtStepItem.vue'

const props = {
  stepItem: [
    {
      selector: '.mt-step-item',
    },
  ],
}

describe('MtStepItem.vue', () => {
  it('Should render highlight component', () => {
    const wrapper = mount(MtStepItem, {
      props,
    })

    expect(wrapper.find('.mt-step-item-highlight').exists()).toEqual(true)
  })

  it('Should not render hint when props hint is undefined', () => {
    const wrapper = mount(MtStepItem, {
      props,
    })

    expect(wrapper.find('.mt-step-item-hint').exists()).toEqual(false)
  })

  it('Should render hint when props hint is existed', () => {
    const wrapper = mount(MtStepItem, {
      props: {
        stepItem: [
          {
            selector: '.mt-step-item',
            hint: {
              text: 'test',
            },
          },
        ],
      },
    })

    expect(wrapper.find('.mt-step-item-hint').exists()).toEqual(true)
  })

  it('Render correct highlight count', () => {
    const wrapper = mount(MtStepItem, {
      props: {
        stepItem: [...props.stepItem, ...props.stepItem],
      },
    })

    expect(wrapper.findAll('.mt-step-item-highlight')).toHaveLength(2)
  })
})
