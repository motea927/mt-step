import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MtStepOverlay from '@/components/MtStepOverlay'

describe('MtStepOverlay', () => {
  it('Renders correctly', () => {
    const wrapper = mount(MtStepOverlay)
    expect(wrapper.element).toMatchSnapshot()
  })
})
