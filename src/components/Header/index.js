import React, { Component } from 'react';
import { Header, Label, Icon, Grid, Button } from 'semantic-ui-react'
import UserAvatarsGroup from '../UserAvatarsGroup';
import styles from './header.css';
import { getUserAvatars } from '../../service/UserDao';

export default class AppHeader extends Component {

  render() {
    const userAvatars = getUserAvatars();

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header className={styles['my-header']}>
              JSA-Design
            </Header>
          </Grid.Column>
          <Grid.Column width={9}>
            <UserAvatarsGroup userAvatars={userAvatars}/>
          </Grid.Column>

          <Grid.Column floated='right' width={4}>
            <Label>
              <Icon name='attach'/> 120 files attached
            </Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}