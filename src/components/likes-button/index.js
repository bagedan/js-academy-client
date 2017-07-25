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

    constructor(props) {
        super(props);
        this.state = {likesCount: props.likesCount};
    }

    increaseCounter = () => {
        this.setState(prevState => ({
                likesCount: prevState.likesCount + 1
            })
        );
    };

    render() {
        return (
            <span className={styles[`button-${this.props.style}`]} onClick={this.increaseCounter}>
                <i className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></i>{this.state.likesCount}
            </span>
        )
    }
}

export default LikesCounter;