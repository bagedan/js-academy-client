import React, { Component } from 'react';
import { Header, Label, Icon, Grid, Card } from 'semantic-ui-react'
import Stage from '../Stage';

export default class AppBody extends Component {

  render() {
    console.log(`got ${this.props.userLists.size} lists for current user`);
    return (
      <Grid>
        <Grid.Row>
          {
            this.props.userLists.map(list =>
                <Grid.Column width={4}  key={list.get('title')}>
                  <Stage title={list.get('title')} items={list.get('items')}/>
                </Grid.Column>
           )
          }

        </Grid.Row>
      </Grid>
    )
  }

}