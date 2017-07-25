import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import PhotoContainer from './index.js';
import Header from '../header';
import PhotoList from '../photo-list';


describe('PhotoContainer', () => {
    it('should render Header and PhotoList', () => {
        const wrapper = shallow(<PhotoContainer/>);
        expect(wrapper.containsAllMatchingElements([
            <Header />,
            <PhotoList />
        ])).to.equal(true);
    });
});