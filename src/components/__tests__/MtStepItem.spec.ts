import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MtStepItem from '@/components/MtStepItem'
import type MtStepItemHighlight from '@/components/MtStepItemHighlight'

const props = {
  stepItem: [
    {
      selector: '.mt-step-item',
    },
  ],
}

describe('MtStepItem', () => {
  it('Should render MtStepItemHighlight component', () => {
    const wrapper = mount(MtStepItem, {
      props,
    })
    const mtStepItemHighlight = wrapper.findComponent<
      typeof MtStepItemHighlight
    >('.mt-step-item-highlight')

    expect(mtStepItemHighlight.exists()).toBe(true)
  })

  it('Highest priority to render main hint slot', () => {
    const wrapper = mount(MtStepItem, {
      props: {
        stepItem: [
          {
            selector: '.mt-step-item',
          },
        ],
      },
      slots: {
        'hint-0': '<div id="custom-hint"></div>',
        'main-hint': '<div id="main-hint"></div>',
      },
    })

    expect(wrapper.find('#custom-hint').exists()).toEqual(false)
    expect(wrapper.find('#main-hint').exists()).toEqual(true)
  })

  it('Render correct hint slot ith item index', () => {
    const wrapper = mount(MtStepItem, {
      props: {
        stepItem: [
          {
            selector: '.mt-step-item',
          },
        ],
      },
      slots: { 'hint-0': '<div id="custom-hint"></div>' },
    })

    expect(wrapper.find('#custom-hint').exists()).toEqual(true)
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

  it('props.stepItem[i].isDisabledSelectorPointEvent should passed to highlight component', () => {
    const wrapper = mount(MtStepItem, {
      props: {
        stepItem: [
          {
            selector: '.mt-step-item',
            isPointerEventsDisabled: true,
          },
        ],
      },
    })

    const mtStepItemHighlight = wrapper.findComponent<
      typeof MtStepItemHighlight
    >('.mt-step-item-highlight')

    expect(mtStepItemHighlight.exists()).toBe(true)
    expect(mtStepItemHighlight.props('isPointerEventsDisabled')).toBe(true)
  })
})
