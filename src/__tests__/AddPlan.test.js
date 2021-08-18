import React from 'react';
import { configure, shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import AddPlan from '../components/AddPlan';

configure({adapter: new ReactSixteenAdapter});

let wrapper
beforeEach(() => {
    wrapper = shallow(<AddPlan/>)
})

describe('Admin dashboard component', () => {
    test('renders', () => {
        expect(wrapper.exists()).toBe(true);
    });
});