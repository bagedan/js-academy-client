export default class Photo {
    addLike = () => {
        if (this._likesCount) {
            this._likesCount = this._likesCount + 1;
        } else {
            this._likesCount = 1;
        }
    }

    constructor(id, description, likesCount, mediumImageUrl, smallImageUrl, bigImageUrl) {
        this._id = id;
        this._description = description;
        this._likesCount = likesCount;
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

    get likesCount() {
        return this._likesCount;
    }
}