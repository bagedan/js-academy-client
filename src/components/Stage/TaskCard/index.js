import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import styles from './taskCard.css';

export default class TaskCard extends Component {
  render() {
    return (
      <Card className={[styles['content'], styles[this.props.item.color]] } >
        <Card.Content>
          <Card.Header>{this.props.item.title}</Card.Header>
          <Card.Meta>last modified {this.props.item.lastModified}</Card.Meta>
          <Image src={this.props.item.imageUrl}/>
        </Card.Content>
      </Card>
    )
  }
}