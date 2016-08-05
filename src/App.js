import React, { Component } from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducer'
import VisibleProjectList from './visible-project-list'

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <VisibleProjectList />
      </Provider>
    );
  }
}

export default App
