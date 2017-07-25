import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import { shallow, mount } from 'enzyme';
import DeleteButton from './index.js';

chai.should();
chai.use(sinonChai);

describe('DeleteButton', () => {
    it('should call the click callback', () => {

        let callback = sinon.spy();
        const wrapper = shallow(<DeleteButton onClick={callback}/>);
        wrapper.find('span').simulate('click');

        callback.should.have.been.calledWith();
    });
});