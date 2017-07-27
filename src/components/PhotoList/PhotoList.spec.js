import React from 'react';
import sinon from 'sinon';
import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';
import {shallow, mount} from 'enzyme';
import PhotoHtml from '../Photo'
import Photo from '../../model/photo'
import PhotoService from '../../service/PhotoService'

chai.should();
chai.use(sinonChai);


describe('Photo', () => {

    //TODO - how to mock PhotoService
    it('should get photos from service', () => {
        const wrapper = shallow(<PhotoList/>);
        expect(false).to.be.equal(true, 'PhotoService is not yet mocked and test is not ready');
    });

});