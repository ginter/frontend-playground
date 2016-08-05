import React from 'react'
import { mount } from 'enzyme'

import App from '../App'

describe('creating a project', () => {
  it('adds the project to the list', () => {
    const projectName = 'projectName';
    const nameInputSelector = 'form[name="new-project"] input[name="project-name"]';
    const wrapper = mount(<App />);

    // precondition
    expect(wrapper.find('.project-row').length).toEqual(0);

    // create project
    wrapper.find(nameInputSelector).simulate('change', {
      target: { value: projectName }
    });
    wrapper.find('form[name="new-project"]').simulate('submit');

    expect(wrapper.find('.project-row').length).toEqual(1);
    expect(wrapper.find('.project-row p').text()).toContain(projectName);
  });
});
