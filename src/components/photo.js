import React from 'react';

const Photo = (props) => {
    return (
        <div id="{ photo.description }" class="photo col-md-12">
            <div class="row pic-zone">
                <div class="col-md-12">
                    <picture class="">
                        <source media="(min-width: 1100px)" srcset="http://via.placeholder.com/700x300"/>
                        <source media="(min-width: 700px)" srcset="http://via.placeholder.com/525x225"/>
                        <source media="(min-width: 480px)" srcset="http://via.placeholder.com/350x150"/>
                        <img class="img-thumbnail" src="http://via.placeholder.com/350x150" alt="image"/>
                    </picture>
                    <span class="button-on-picture">
                        <i class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></i>5
                    </span>
                </div>
            </div>

            <div class="description-with-likes row">
                <div class="caption col-md-12 description">
                    <p>The first picture that was taken on the day before the day this picture was taken</p>
                </div>
            </div>
        </div>
        );
};

export default Photo;