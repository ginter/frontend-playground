import React from 'react'
import { mount } from 'enzyme'

import App from '../App'

describe('deleting a project', () => {
  it('removes the project from the list', () => {
    const project = { uid: 'projId', name: 'projName' };
    const wrapper = mount(<App projects={[project]} />);

    // precondition
    expect(wrapper.find('.project-row').length).toEqual(1);

    // delete project
    wrapper.find('.project-row button').simulate('click');

    expect(wrapper.find('.project-row').length).toEqual(0);
  });
});
