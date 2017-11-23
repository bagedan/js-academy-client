import React from 'react'
import { render } from 'react-dom'
import { Button, Container } from 'semantic-ui-react'
import AppHeader from './components/Header';
import AppBody from './components/Body';
import "semantic-ui-less/semantic.less";
import { getUserAvatars } from './service/UserDao';
import {getUserLists} from './service/UserDao';
const { fromJS, Map } = require('immutable');

const userAvatars = fromJS(getUserAvatars());
const userLists = fromJS(getUserLists());
const initState = Map({
  userAvatars,
  userLists
});

function addCard(userLists, card) {
  userLists.get(0).items.add(card);
}

const reducer = (state, action) => {

  switch (action.type){
    case 'ADD':
      state = state.setIn(['userLists', 0, 'items'], state.getIn(['userLists', 0, 'items']).push(fromJS(action.card)));
  }
  return state;
};

const dispatchAddEvent = () => {
  store.dispatch({
    type: 'ADD',
    card: {
      id: 'item' + Math.floor(Math.random() * 1000),
      title: 'Pre-Sale/ Planning/ Execution Design Spring Planning',
      lastModified: '27/09',
      color: 'orange'
    }
  })
};

import { createStore } from 'redux';
const store = createStore(reducer, initState);

const reduxRender = () => {
  const App = () => (
  //consume the application state
    <Container>
      <AppHeader userAvatars={store.getState().get('userAvatars')}/>

      <AppBody userLists={store.getState().get('userLists')}/>
      <Button onClick={dispatchAddEvent}>Click</Button>
    </Container>
  );

  render(<App />, document.getElementById('root'));
};

console.log(store.getState());
store.subscribe((event) =>
  console.log(store.getState())
);

store.subscribe(reduxRender);
store.dispatch({ type: 'INCREMENT' });

reduxRender();
