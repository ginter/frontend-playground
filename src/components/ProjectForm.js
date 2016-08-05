import React from 'react'

const ProjectForm = ({ name = '', onSubmit }) => {
  let _name;

  return(
    <form name='new-project' onSubmit={e => {
      e.preventDefault();
      onSubmit(_name.value);
      _name.value = ''; }}>
      <input
        type='text'
        name='project-name'
        defaultValue={name}
        ref={c => _name = c }
        onChange={e => _name.value = e.target.value} />
      <input type='submit' />
    </form>
  );
}

export default ProjectForm
