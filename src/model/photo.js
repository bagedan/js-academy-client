export default class Photo {
    addLike = () => {
        if (this.likesCount) {
            this.likesCount = this.likesCount + 1;
        } else {
            this.likesCount = 1;
        }
    }

    constructor(id, description, likesCount, mediumImageUrl, smallImageUrl, bigImageUrl) {
        this.id = id;
        this.description = description;
        this.likesCount = likesCount;
        this.mediumImageUrl = mediumImageUrl;
        this.smallImageUrl = smallImageUrl;
        this.bigImageUrl = bigImageUrl;
    }

}