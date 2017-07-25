import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import LikesCounter from './index.js';

describe('LikesCounter', () => {
    it('like counter should be 0 by default', () => {
        const wrapper = shallow(<LikesCounter/>);
        expect(wrapper.state('likesCount')).to.be.equal(0);
    });

    it('like counter should be asigned by prop', () => {
        const wrapper = shallow(<LikesCounter likesCount="42"/>);
        expect(wrapper.state('likesCount')).to.be.equal('42');
    });

    it('increase counter by 1', () => {
        const wrapper = shallow(<LikesCounter/>);
        wrapper.find('span').simulate('click');

        expect(wrapper.state('likesCount')).to.be.equal(1);
    });
});