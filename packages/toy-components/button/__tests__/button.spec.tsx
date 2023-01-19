import { mount } from '@vue/test-utils'
import { ToyIconLoading } from '@xxm7/toy-icon'
import { ToyButton } from '../../../../dist'

describe('Button', () => {
  it('create', () => {
    const wrapper = mount(() => <ToyButton type="primary" />)
    expect(wrapper.classes()).toContain('toy-button--primary')
  })

  it('loading', () => {
    const wrapper = mount(() => <ToyButton loading />)

    expect(wrapper.classes()).toContain('is-loading')
    expect(wrapper.findComponent(ToyIconLoading).exists()).toBeTruthy()
  })

  it('plain', () => {
    const wrapper = mount(() => <ToyButton plain />)

    expect(wrapper.classes()).toContain('is-plain')
  })

  it('round', () => {
    const wrapper = mount(() => <ToyButton round />)
    expect(wrapper.classes()).toContain('is-round')
  })

  it('circle', () => {
    const wrapper = mount(() => <ToyButton circle />)

    expect(wrapper.classes()).toContain('is-circle')
  })
})
