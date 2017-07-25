import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Header from './index.js';

describe('Header', () => {
    it('should be div of jumbotron class', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('div').hasClass('jumbotron')).to.be.equal(true);
    });
});