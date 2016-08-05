import React from 'react'
import renderer from 'react-test-renderer'

import ProjectForm from '../ProjectForm'

describe('ProjectForm', () => {
  it('renders correctly with no name provided', () => {
    const component = renderer.create(<ProjectForm />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a name provided', () => {
    const component = renderer.create(<ProjectForm name='name' />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
