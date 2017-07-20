import React from 'react';

const Photo = (photo) => {
    return (
        <div id={ photo.key } className="photo col-md-12">
            <div className="row pic-zone">
                <div className="col-md-12">
                    <picture>
                        <source media="(min-width: 1100px)" srcSet={photo.bigImageUrl} />
                        <source media="(min-width: 700px)" srcSet={photo.mediumImageUrl}/>
                        <source media="(min-width: 480px)" srcSet={photo.smallImageUrl}/>
                        <img className="img-thumbnail" src={photo.mediumImageUrl} alt="image"/>
                    </picture>
                    <span className="button-on-picture">
                        <i className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></i>{photo.likesCount}
                    </span>
                </div>
            </div>

            <div className="description-with-likes row">
                <div className="caption col-md-12 description">
                    <p>{photo.description}</p>
                </div>
            </div>
        </div>
        );
};

export default Photo;