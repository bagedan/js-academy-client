import React from 'react';
import sinon from 'sinon';
import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';
import {shallow, mount} from 'enzyme';
import Photo from './index.js';
import DeleteButton from '../delete-button';
import LikesButton from '../likes-button';

chai.should();
chai.use(sinonChai);

let wrapper;
const defaultUrl = 'defaultImageUrl';
const deleteImageCallback = sinon.spy();

describe('Photo', () => {

    //TODO - why this test is not working?
    it('should render DeleteButton and LikesButton', () => {
        const wrapper = shallow(<Photo id="id" mediumImageUrl={defaultUrl} deleteImageCallback={deleteImageCallback}/>);
        expect(wrapper.containsAllMatchingElements([
            <DeleteButton/>,
            <LikesButton/>
        ])).to.equal(true);
    });

    it('should call trash button callback', () => {
        let photo = new Photo({
            id: 'id',
            mediumImageUrl: defaultUrl,
            deleteImageCallback
        })

        photo.trashButtonCallback();

        deleteImageCallback.should.have.been.calledWith('id');

    });
});