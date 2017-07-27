import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import PhotoContainer from './index.js';
import Header from '../Header';
import PhotoList from '../PhotoList';


describe('PhotoContainer', () => {
    it('should render Header and PhotoList', () => {
        const wrapper = shallow(<PhotoContainer/>);
        expect(wrapper.containsAllMatchingElements([
            <Header />,
            <PhotoList />
        ])).to.equal(true);
    });

    it('should have class container-fluid', () => {
        const wrapper = shallow(<PhotoContainer/>);
        expect(wrapper.is('div.container-fluid')).to.be.equal(true);
    });
});