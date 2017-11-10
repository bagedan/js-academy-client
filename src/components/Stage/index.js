import React, { Component } from 'react';
import { Header, Label, Icon, Grid, Card, Image } from 'semantic-ui-react'
import TaskCard from './TaskCard'

export default class Stage extends Component {

  render() {
    const cardHeader =
      <Card.Header textAlign = 'center'>
        {this.props.title}
      </Card.Header>;

    if (this.props.items.length > 0) {
      return (
        <Card>
          {cardHeader}
          <Card.Content>
            {
              this.props.items.map(item => {
                console.log('item: ', item);
                return <TaskCard item={item}/>
              })
            }
          </Card.Content>
        </Card>
      )
    } else {
      return <Card>
        {cardHeader}
        <Card.Content>
          No items - drop items here
        </Card.Content>
      </Card>
    }
  }

}