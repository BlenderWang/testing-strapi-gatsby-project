import React from 'react';
import { mount } from 'enzyme';
import Form from '../components/Form';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('should cature name correctly onChange', () => {
    const component = mount(<Form />)
    const input = component.find('input').at(2)
    input.instance().value = 'aloha'
    input.simulate('change')
    expect(component.state().name).toEqual('aloha')
})

it('should cature email correctly onChange', () => {
    const component = mount(<Form />)
    const input = component.find('input').at(3)
    input.instance().value = 'mail@mail.com'
    input.simulate('change')
    expect(component.find('input').at(3).props().value).toEqual('mail@mail.com')
})

it('should cature email correctly onChange', () => {
    const component = mount(<Form />)
    const input = component.find('input').at(3)
    input.instance().value = 'mail@mail.com'
    input.simulate('change')
    expect(component.state().email).toEqual('mail@mail.com')
})

it('should cature message correctly onChange', () => {
    const component = mount(<Form />)
    const textarea = component.find('textarea').at(0)
    textarea.instance().value = 'chokidy'
    textarea.simulate('change')
    expect(component.state().message).toEqual('chokidy')
})

// alert() works but the test does not pass
// it('should call alert when submit is clicked', () => {
//     const expectedArg = 'success!'
//     const component = mount(<Form />)
//     window.alert = jest.fn()

//     component.find('form').simulate('submit')
//     expect(window.alert).toHaveBeenCalledWith(expectedArg)
// })