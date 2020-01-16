import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json'
import { shallow, render } from 'enzyme'
import Button from '../components/Button'

configure({ adapter: new Adapter() });

describe('test btn component', () => {
    it('should render btn component properly in DOM', () => {
        shallow(<Button btnTxt={'test'} />)
    })

    it('should find btn html element', () => {
        const wrapper = shallow(<Button btnTxt={'test'} />)
        expect(wrapper.find('button')).toHaveLength(1)
    })

    it('should find btn html element with classname of btn', () => {
        const wrapper = shallow(<Button className='btn' btnTxt={'test'} />)
        expect(wrapper.find('button.btn')).toBeTruthy()
    })

    it('test click event', () => {
        const simulateCb = jest.fn()

        const wrapper = shallow((<Button onClick={simulateCb} className='btn' btnTxt={'test'} />))
        wrapper.find('button').simulate('click')
        expect(wrapper.find('button').hasClass('btn')).toEqual(true)
    })
})

test('should create a snapshot', () => {
    const wrapper = shallow((<Button onClick={() => {}} className='btn' btnTxt={'test'} />))
    expect(toJSON(wrapper)).toMatchSnapshot('click')
})

test('should create a snapshot', () => {
    const wrapper = render((<Button onClick={() => {}} className='btn' btnTxt={'test'} />))
    expect(toJSON(wrapper)).toMatchSnapshot()
})
