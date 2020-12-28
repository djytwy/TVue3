/*
 * @Date: 2020-09-11 16:04:08
 * @LastEditTime: 2020-09-17 17:36:38
 * @FilePath: /myVue3/test/learnJtest/learnJtest.spec.js
 * @Author: twy
 * @LastEditors: twy
 */
import { mount } from "@vue/test-utils";
import tcomponent from "./learnJtest.vue";
// The component to test
  
test('displays message', () => {
    const wrapper = mount(tcomponent, {
        props: {
            tMsg: 'Hello world'
        }
    })

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Hello world')
    expect(wrapper.text()).toContain('Hello Jest')
})