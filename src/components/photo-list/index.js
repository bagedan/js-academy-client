import React from 'react';
import PhotoHtml from "../photo";

class Photo {
    constructor(id, description, likesCount, mediumImageUrl, smallImageUrl, bigImageUrl) {
        this._id = id;
        this._description = description;
        this._mediumImageUrl = mediumImageUrl;
        this._smallImageUrl = smallImageUrl;
        this._bigImageUrl = bigImageUrl;
        this._likesCount = likesCount;
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

    get likesCount() {
        return this._likesCount;
    }
}

export default () => {
    const photoArray = [
        new Photo(1, 'The first picture that was taken on the day before the day this picture was taken', 10,
            'http://via.placeholder.com/525x225',
            'http://via.placeholder.com/350x150',
            'http://via.placeholder.com/700x300'),
        new Photo(2, 'The second picture that was taken on the day before the day this picture was taken', 15,
            'http://via.placeholder.com/525x225',
            'http://via.placeholder.com/350x150',
            'http://via.placeholder.com/700x300'),
        new Photo(3, 'The third picture that was taken on the day before the day this picture was taken', 38,
            'http://via.placeholder.com/525x225',
            'http://via.placeholder.com/350x150',
            'http://via.placeholder.com/700x300')
    ];

    const photoElementList = photoArray.map((photo) => {
        if (photo instanceof Photo) {
            console.log(`Generating new Photo component from object [${JSON.stringify(photo)}]`);
            //TODO so much typing here... why [a,b] = [b,a] kind of thing is not working here?
            //or can I just pas the photo object?
            return <PhotoHtml key={photo.id}
                              id={photo.id}
                              description={photo.description}
                              likesCount={photo.likesCount}
                              smallImageUrl = {photo.smallImageUrl}
                              mediumImageUrl = {photo.mediumImageUrl}
                              bigImageUrl = {photo.bigImageUrl}
            />
        }
    });
    console.log(`List of photos built`);
    return (

        <div id="photoList" className="row">
            {photoElementList}
        </div>
    );
}