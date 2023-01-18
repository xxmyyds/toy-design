import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'

describe('Button', () => {
  it('create', () => {
    const wrapper = mount(() => <Button type="primary" />)
    expect(wrapper.classes()).toContain('toy-button--primary')
  })
})
