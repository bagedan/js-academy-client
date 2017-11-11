import React, { Component } from 'react';
import { Label } from 'semantic-ui-react'

export default class UserAvatar extends Component {

  render() {
    const imageProps = {
      avatar: true,
      spaced: 'right',
      src: '/homework/js-academy-client/static/assets/images/elliot.jpg',
    };

    return <Label as='a' image={imageProps} />
  }
}