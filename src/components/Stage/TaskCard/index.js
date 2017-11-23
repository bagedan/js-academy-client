import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import classNames from 'classnames';
import styles from './taskCard.css';

export default class TaskCard extends Component {
  render() {
    const classes = classNames(
      styles.content,
      styles[this.props.item.get('color')]
    );
    return (
      <Card className={classes} >
        <Card.Content>
          <Card.Header>{this.props.item.get('title')}</Card.Header>
          <Card.Meta>last modified {this.props.item.get('lastModified')}</Card.Meta>
          <Image src={this.props.item.get('imageUrl')}/>
        </Card.Content>
      </Card>
    )
  }
}