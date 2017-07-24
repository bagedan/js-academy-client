import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

class LikesCounter extends Component {

    static propTypes = {
        likesCount: PropTypes.number,
        style: PropTypes.string
    };

    static defaultProps = {
        likesCount: 0,
        style: 'on-picture'
    };

    render() {
        return (
            <span className={styles[`button-${this.props.style}`]}>
                <i className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></i>{this.props.likesCount}
            </span>
        )
    }
}

export default LikesCounter;