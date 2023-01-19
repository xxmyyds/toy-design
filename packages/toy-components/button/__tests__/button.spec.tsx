import { mount } from '@vue/test-utils'
import { ToyIconLoading } from '@xxm7/toy-icon'
import Button from '../src/button.vue'

describe('Button', () => {
  it('create', () => {
    const wrapper = mount(() => <Button type="primary" />)
    expect(wrapper.classes()).toContain('toy-button--primary')
  })

  it('loading', () => {
    const wrapper = mount(() => <Button loading />)

    expect(wrapper.classes()).toContain('is-loading')
    expect(wrapper.findComponent(ToyIconLoading).exists()).toBeTruthy()
  })

  it('plain', () => {
    const wrapper = mount(() => <Button plain />)

    expect(wrapper.classes()).toContain('is-plain')
  })

  it('round', () => {
    const wrapper = mount(() => <Button round />)
    expect(wrapper.classes()).toContain('is-round')
  })

  it('circle', () => {
    const wrapper = mount(() => <Button circle />)

    expect(wrapper.classes()).toContain('is-circle')
  })
})
