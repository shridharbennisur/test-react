import React from 'react';
import Bcomponent from './Bcomponent';
import { shallow } from 'enzyme';

describe('testing the b component', () => {
    it('adding 2 number', () => {
        expect(2+3).toBe(5);
    });
    it('minus 2 number', () => {
        expect(3-1).toBe(2);
    });
    it('its b component renders', () => {
        shallow(<Bcomponent name="testing" />);
    });
    it ('name props render', () => {
        const component = shallow(<Bcomponent name="test"/>);
        const span = component.find('.name-component');
        console.log(span);
    });
});