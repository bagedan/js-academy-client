import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

class DeleteButton extends Component {

    static propTypes = {
        style: PropTypes.string,
        onClick: PropTypes.func.isRequired
    };

    static defaultProps = {
        style: 'on-picture'
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className={styles[`button-${this.props.style}`]} onClick={this.props.onClick}>
                <i className="glyphicon glyphicon-trash" aria-hidden="true"></i>
            </span>
        )
    }
}

export default DeleteButton;