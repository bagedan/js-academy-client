import React, { Component } from 'react';
import { Image, Label, Container } from 'semantic-ui-react';
import styles from './user-avatars-group.css';

export default class UserAvatarsGroup extends Component {

  render() {
    const userAvatars = this.props.userAvatars;
    const userAvatarsImages = userAvatars.map(avatar => {
      return <div className={styles['avatar-div']} key={avatar.get('id')}>
        <Image avatar src={avatar.get('avatarUrl')}/>
        {avatar.get('markWithStar') &&
          <span className={styles['star-on-top']}>
            <i className="star icon" aria-hidden="true"></i>
          </span>
        }
      </div>
    });

    return <div className={styles['avatars-group']}>
      {userAvatarsImages}
      <Label circular={true} id={styles['add-user-button']}>
        +
      </Label>
    </div>
  }
}