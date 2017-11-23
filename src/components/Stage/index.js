import React, { Component } from 'react';
import { Header, Label, Icon, Grid, Card, Image } from 'semantic-ui-react'
import TaskCard from './TaskCard';
import styles from './stage.css';

export default class Stage extends Component {

  render() {
    const cardHeader =
      <Card.Header textAlign={'center'}>
        <Icon name={'edit'} className={styles['edit-header-button']}/>
        <span className={styles['title']} >{this.props.title}</span>
        <span className={styles['counter']} >{this.props.items.length}</span>
      </Card.Header>;

    if (this.props.items.size > 0) {
      return (
        <Card className={styles['stage']}>
          <Card.Content className={styles['content']}>
            {cardHeader}
            {
              this.props.items.map(item => {
                return <TaskCard item={item} key={item.get('id')}/>
              })
            }
          </Card.Content>
        </Card>
      )
    } else {
      return <Card className={styles['stage']}>
        <Card.Content  className={styles['content']}>
          {cardHeader}
          <div style={{margin: '1em', backgroundColor: '#f8fafb'}}>
            No items - drop items here
          </div>
        </Card.Content>
      </Card>
    }
  }

}