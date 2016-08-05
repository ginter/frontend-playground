import React from 'react'
import renderer from 'react-test-renderer'

import ProjectList from '../ProjectList'

jest.unmock('../ProjectList');

describe('ProjectList', () => {
  it('renders correctly with no projects', () => {
    const component = renderer.create(<ProjectList projects={[]} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with a single project', () => {
    const project = { uid: 'projId', name: 'projName' };
    const component = renderer.create(<ProjectList projects={[project]} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
