import React, { Component } from 'react';
import { Header, Label, Icon, Grid, Button} from 'semantic-ui-react'

export default class AppHeader extends Component {

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Header>
              JSA-Design
            </Header>
            <Button content='blah-blah'/>
          </Grid.Column>
          <Grid.Column>
            <Label circular={true}>
               userA
            </Label>
          </Grid.Column>
          <Grid.Column>
            <Label circular={true}>
              userB
            </Label>
          </Grid.Column>
          <Grid.Column>
            <Label circular={true}>
               +
            </Label>
          </Grid.Column>

          <Grid.Column floated='right' width={2}>
            <Label>
              <Icon name='attach'/> 120 files attached
            </Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

}