import React, {Component} from 'react'
import PhotoHtml from '../photo'
import Photo from '../../model/photo'
import PhotoService from '../../service/PhotoService'

class PhotoList extends Component {

    deleteImageCallback = (id) => {
        console.log(`got deletion of photo [${id}] in photoList component`);
        this._photoService.deletePhoto(id);
        this.setState(() => {
            photos: this._photoService.getPhotos()
        })
    }

    constructor(props) {
        super(props);

        this._photoService = new PhotoService();

        this.state = {
            photos: this._photoService.getPhotos()
        }
    }

    render() {

        const photoElementList = this.state.photos.map((photo) => {
            if (photo instanceof Photo) {
                console.log(`Generating new Photo component from object [${JSON.stringify(photo)}]`);
                return <PhotoHtml key={photo.id}
                                  deleteImageCallback = {this.deleteImageCallback}
                                  {...photo}
                />
            }
        });
        console.log(`List of photos is built`);
        return (

            <div id="photoList" className="row">
                {photoElementList}
            </div>
        );
    }
}


export default PhotoList;