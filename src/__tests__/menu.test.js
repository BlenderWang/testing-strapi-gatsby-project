import React from 'react';
import { mount } from 'enzyme';
import Menu from '../components/Menu';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('should become active when hamburger menu is clicked', () => {
    const wrapper = mount(<Menu />)
    wrapper.find('.menu-btn__hamburger').simulate('click')
    expect(wrapper.state('open')).toBeTruthy()
})

it('should render items when active', () => {
    const wrapper = mount(<Menu />)
    wrapper.setState({ open: true })
    expect(wrapper.find('.menu-list__item').length).toBe(5)
})
