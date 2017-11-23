import React, { Component } from 'react';
import { Header, Label, Icon, Grid, Button, Container } from 'semantic-ui-react'
import UserAvatarsGroup from '../UserAvatarsGroup';
import styles from './header.css';

export default class AppHeader extends Component {

  render() {
    const userAvatars = this.props.userAvatars;

    return (
      <header className={styles.header}>
        <Container>
          <Header className={styles.title}>
            JSA-Design
          </Header>
          <span className={styles.usersGroup}>
            <UserAvatarsGroup userAvatars={userAvatars}/>
          </span>
          <span className={styles.attachments}>
            <Icon name='attach'/> 120 files attached
          </span>
        </Container>
      </header>
    )
  }

}