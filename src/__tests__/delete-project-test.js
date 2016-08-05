import React from 'react'
import renderer from 'react-test-renderer'

import ProjectList from '../components/project-list'

jest.unmock('../components/project-list');

describe('ProjectList', () => {
  it('renders correctly with no projects', () => {
    const component = renderer.create(<ProjectList projects={[]} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
