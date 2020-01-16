import React from 'react'
import { mount } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavHeader from '../components/NavHeader';
import Paragraph from '../components/Paragraph';

configure({ adapter: new Adapter() });

test('should render img', () => {
    const wrapper = mount(<NavHeader />)
    expect(wrapper.find('img').exists()).toBeTruthy() 
})

test('should have texts', () => {
    const txt = 'lorem ipsum'
    const wrapper = mount(<Paragraph paragraph={txt} />)
    expect(wrapper.find('Paragraph').text()).toBe(txt)
})
