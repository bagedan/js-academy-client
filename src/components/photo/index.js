import React, {Component} from 'react';
import PropTypes from 'prop-types'
import LikesButton from '../likes-button'
import TrashButton from '../delete-button'

class Photo extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        bigImageUrl: PropTypes.string,
        mediumImageUrl: PropTypes.string.isRequired,
        smallImageUrl: PropTypes.string,
        description: PropTypes.string,
        deleteImageCallback: PropTypes.func.isRequired
    };

    trashButtonCallback = () => {
        console.log(`Delete button pressed on photo [${this.props.id}]`);
        this.props.deleteImageCallback(this.props.id);
    }


    render() {
        return (
            <div id={this.props.id} className="photo col-md-12">
                <div className="row pic-zone">
                    <div className="col-md-12">
                        <TrashButton onClick={this.trashButtonCallback}/>
                        <picture>
                            <source media="(min-width: 1100px)" srcSet={this.props.bigImageUrl}/>
                            <source media="(min-width: 700px)" srcSet={this.props.mediumImageUrl}/>
                            <source media="(min-width: 480px)" srcSet={this.props.smallImageUrl}/>
                            <img className="img-thumbnail" src={this.props.mediumImageUrl} alt="image"/>
                        </picture>
                        <LikesButton/>
                    </div>
                </div>

                <div className="description-with-likes row">
                    <div className="caption col-md-12 description">
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default Photo;