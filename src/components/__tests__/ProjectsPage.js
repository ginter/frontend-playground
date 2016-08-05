import React from 'react'
import renderer from 'react-test-renderer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../../reducers'

import ProjectsPage from '../ProjectsPage'

describe('ProjectsPage', () => {
  it('renders correctly', () => {
    const store = createStore(reducer);
    const component = renderer.create(
      <Provider store={store}>
        <ProjectsPage />
      </Provider>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
