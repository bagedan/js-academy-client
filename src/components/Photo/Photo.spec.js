import React from 'react';
import sinon from 'sinon';
import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';
import {shallow, mount} from 'enzyme';
import Photo from './index.js';
import DeleteButton from '../DeleteButton';
import LikeButton from '../LikeButton';

chai.should();
chai.use(sinonChai);

const defaultUrl = 'defaultImageUrl';
const deleteImageCallback = sinon.spy();

describe('Photo', () => {

    //TODO - this trst is failing because of properties mismatch in DeleteButton
    //what can I do about it?
    it('should render DeleteButton and LikesButton', () => {
        const wrapper = shallow(<Photo id="id" mediumImageUrl={defaultUrl} deleteImageCallback={deleteImageCallback}/>);
        expect(wrapper.containsAllMatchingElements([
            <DeleteButton/>,
            <LikeButton/>
        ])).to.equal(true, 'should render DeleteButton and LikesButton');
    });

    //TODO - how to test parameters past to child component?
    it('should pass initialLikesCount to LikesButton', () => {
        const wrapper = shallow(<Photo id="id" mediumImageUrl={defaultUrl} deleteImageCallback={deleteImageCallback}
                                       initialLikesCount={5}/>);
        // check that initialLikesCount has been passed to LikeButton (it's not now, so the test will fail)
        expect(false).to.be.equal(true, 'count is not passed to LikeButton');
    });

    it('should call trash button callback', () => {
        let photo = new Photo({
            id: 'id',
            mediumImageUrl: defaultUrl,
            deleteImageCallback
        });

        photo.trashButtonCallback();

        deleteImageCallback.should.have.been.calledWith('id');
    });
});