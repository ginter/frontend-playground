import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import createLogger from "redux-logger"
import { Provider } from 'react-redux'
import reducer from './reducers'
import { ProjectsPage } from './components'

class App extends Component {
  constructor(props) {
    super(props);

    const logger = createLogger();
    this.store = createStore(reducer, props, applyMiddleware(thunk, logger));
  }

  render() {
    return(
      <Provider store={this.store}>
        <ProjectsPage />
      </Provider>
    );
  }
}

export default App
