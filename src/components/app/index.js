import React, {Component}  from 'react';
import Header from '../header';
import PhotoList from '../photo-list';

class PhotoContainer extends Component {
    render() {
        return (
            <div id="photo-container" className="container-fluid">
                <Header />
                <PhotoList />
            </div>
        )
    }

}

export default PhotoContainer;