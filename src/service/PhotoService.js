import Photo from '../model/photo'

class PhotoService {

    getPhotos = () => {
        return this._photoArray;
    }
    deletePhoto = (id) => {
        if (id) {
            let photoIndex;
            for (let i = 0; i < this._photoArray.length; i++) {
                if (this._photoArray[i].id === id) {
                    console.log(`Photo with id [${id}] found at index [${i}]`);
                    photoIndex = i;
                    break;
                }
            }
            if (photoIndex === 'undefined') {
                console.log(`Photo with id [${id}] not found`);
            } else {
                console.log(`Removing photo with id [${id}]`);
                this._photoArray.splice(photoIndex, 1);
            }
        } else {
            throw new Error(`Cannot remove photo with id = [${id}]`);
        }
    }
    addLikeToPhoto = (id) => {
        if (id) {
            let photoIndex;
            for (let i = 0; i < this._photoArray.length; i++) {
                if (this._photoArray[i].id === id) {
                    console.log(`Photo with id [${id}] found at index [${i}]. Adding one like to it`);
                    this._photoArray[i].addLike();
                    break;
                }
            }
        } else {
            throw new Error(`Cannot remove photo with id = [${id}]`);
        }
    }

    constructor() {
        this._photoArray = [
            new Photo('1', 'The first picture that was taken on the day before the day this picture was taken', 10,
                'http://via.placeholder.com/525x225',
                'http://via.placeholder.com/350x150',
                'http://via.placeholder.com/700x300'),
            new Photo('2', 'The second picture that was taken on the day before the day this picture was taken', 15,
                'http://via.placeholder.com/525x225',
                'http://via.placeholder.com/350x150',
                'http://via.placeholder.com/700x300'),
            new Photo('3', 'The third picture that was taken on the day before the day this picture was taken', 38,
                'http://via.placeholder.com/525x225',
                'http://via.placeholder.com/350x150',
                'http://via.placeholder.com/700x300')
        ];
    }

}

export default PhotoService;