import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import createLogger from "redux-logger"
import reducer from './reducers'
import { VisibleProjectList } from './containers'

class App extends Component {
  constructor(props) {
    super(props);

    const logger = createLogger();
    this.store = createStore(reducer, props, applyMiddleware(thunk, logger));
  }

  render() {
    return(
      <Provider store={this.store}>
        <VisibleProjectList />
      </Provider>
    );
  }
}

export default App
