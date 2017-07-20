import React from 'react';
import PhotoHtml from "./photo";

class Photo {
    constructor(id, description, mediumImageUrl, smallImageUrl, bigImageUrl){
        this._id = id;
        this._description = description;
        this._mediumImageUrl = mediumImageUrl;
        this._smallImageUrl = smallImageUrl;
        this._bigImageUrl = bigImageUrl;
    }

    get id() {
        return this._id;
    }

    get description() {
        return this._description;
    }

    get mediumImageUrl() {
        return this._mediumImageUrl;
    }

    get smallImageUrl() {
        return this._smallImageUrl;
    }

    get bigImageUrl() {
        return this._bigImageUrl;
    }
}

export default () => {
    const photoArray = [
        new Photo(1, 'The first picture that was taken on the day before the day this picture was taken',
            'http://via.placeholder.com/525x225',
            'http://via.placeholder.com/350x150',
            'http://via.placeholder.com/700x300'),
        new Photo(2, 'The second picture that was taken on the day before the day this picture was taken',
            'http://via.placeholder.com/525x225',
            'http://via.placeholder.com/350x150',
            'http://via.placeholder.com/700x300'),
        new Photo(3, 'The third picture that was taken on the day before the day this picture was taken',
            'http://via.placeholder.com/525x225',
            'http://via.placeholder.com/350x150',
            'http://via.placeholder.com/700x300')
    ];

    const photoElementList = photoArray.map((photo) => {
        if(photo instanceof Photo){
            return <PhotoHtml id={ photo.id() }
                          description={ photo.description() }
                          defaultUrl ={ photo.mediumImageUrl() }
                          smallUrl = {photo.smallImageUrl() }
                          bigUrl = {photo.bigImageUrl() }
            />
        }
    });

    return (
        <div id="photoList" class="row">
            { photoElementList }
        </div>
    );
}