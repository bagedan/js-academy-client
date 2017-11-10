import React, { Component } from 'react';
import { Header, Label, Icon, Grid, Card } from 'semantic-ui-react'
import Stage from '../Stage';
import {getUserLists} from '../../service/UserDao';


export default class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lists: getUserLists()
    };

  }

  render() {
    console.log(`got ${this.state.lists.length} lists for current user`);
    return (
      <Grid>
        <Grid.Row>
          {
            this.state.lists.map(list =>
                <Grid.Column width={4}>
                  <Stage title={list.title} items={list.items}/>
                </Grid.Column>
           )
          }

        </Grid.Row>
      </Grid>
    )
  }

}