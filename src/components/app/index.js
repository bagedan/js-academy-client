import React from 'react';
import Header from '../header';
import PhotoList from '../photo-list';

export default () => {
    return (
        <div id="photo-container" className="container-fluid">
            <Header key='header'/>
            <PhotoList key='photo-list'/>
        </div>
    )
}