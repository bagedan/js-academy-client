import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

export default class TaskCard extends Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.item.title}</Card.Header>
          <Card.Meta>last modified ${this.props.item.lastModified}</Card.Meta>
          <Image src={this.props.item.imageUrl}/>
        </Card.Content>
      </Card>
    )
  }
}