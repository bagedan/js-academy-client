import React, { Component } from 'react';
import { Header, Label, Icon, Grid, Button, Container } from 'semantic-ui-react'
import UserAvatarsGroup from '../UserAvatarsGroup';
import styles from './header.css';
import { getUserAvatars } from '../../service/UserDao';

export default class AppHeader extends Component {

  render() {
    const userAvatars = getUserAvatars();

    return (
      <Container>
        <Header className={styles['my-header']}>
          JSA-Design
        </Header>
        <span className={styles['users-group']}>
          <UserAvatarsGroup userAvatars={userAvatars}/>
        </span>
        <span className={styles['attachments']}>
          <Icon name='attach'/> 120 files attached
        </span>
      </Container>
    )
  }

}