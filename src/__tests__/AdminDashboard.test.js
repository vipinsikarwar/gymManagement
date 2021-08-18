import React from 'react';
import { configure, shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import AdminDashboard from '../components/Dashboard/AdminDashboard';

configure({adapter: new ReactSixteenAdapter});

let wrapper
beforeEach(() => {
    wrapper = shallow(<AdminDashboard/>)
    // wrapper = mount(<AdminDashboard/>)
})

describe('Admin dashboard component', () => {
    test('renders', () => {
        expect(wrapper.exists()).toBe(true);
    });
});

describe('Add new member form', () => {
    it('should render form', () => {
        expect(wrapper.find('form#addNewMember').exists()).toBeTruthy()
        expect(wrapper.find("#email").length).toBeGreaterThanOrEqual(1)
        expect(wrapper.find("#password").length).toEqual(1)
    })
})

describe('When the form is submitted the event is cancelled', () => {
    let prevented = false;
    const wrapper = shallow(<AdminDashboard/>)
    wrapper.find("form#addNewMember").simulate("submit", {
        preventDefault: () => {
            prevented = true
        }
    })
    expect(prevented).toBe(true)
})

describe('Email test suite in add new member form', () => {
    it('state should be changed', () => {
        wrapper.find('#email').simulate('change', {
            target: {name: 'email', value: 'sample11@xyz.com'}
        })
        expect(wrapper.newUser.email).toEqual('sample11@xyz.com')
    })
})