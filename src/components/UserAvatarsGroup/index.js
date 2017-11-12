import React, { Component } from 'react';
import { Image, Label, Container } from 'semantic-ui-react';
import styles from './user-avatars-group.css';

export default class UserAvatarsGroup extends Component {

  render() {
    console.log('styles for avatar group: ', styles);
    const userAvatars = this.props.userAvatars;
    const userAvatarsImages = userAvatars.map(avatar => {
      return <div className={styles['avatar-div']}>
        <Image avatar src={avatar.avatarUrl}/>
        {avatar.markWithStar &&
          <span className={styles['star-on-top']}>
            <i className="star icon" aria-hidden="true"></i>
          </span>
        }
      </div>
    });

    return <div>
      {userAvatarsImages}
      <Label circular={true} id={styles['add-user-button']}>
        +
      </Label>
    </div>
  }
}