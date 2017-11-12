import React, { Component } from 'react';
import { Image, Label } from 'semantic-ui-react';
import styles from './user-avatars-group.css';

export default class UserAvatarsGroup extends Component {

  render() {
    const userAvatars = this.props.userAvatars;
    const userAvatarsImages = userAvatars.map(avatar => {
      return <Image width={''} avatar src={avatar.avatarUrl} />
    });
    return <div>
      {userAvatarsImages}
      <Label circular={true} className={styles['add-user-button']}>
        +
      </Label>
    </div>
  }
}