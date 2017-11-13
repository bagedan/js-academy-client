import React from 'react'
import { render } from 'react-dom'
import { Button, Container } from 'semantic-ui-react'
import AppHeader from './components/Header';
import AppBody from './components/Body';
import "semantic-ui-less/semantic.less";
import styles from './main.css';

const MOUNT_NODE = document.getElementById('root');

const App = () => (
  <Container>
    <AppHeader/>

    <AppBody />
  </Container>
);

render(<App />, MOUNT_NODE);