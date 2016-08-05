import React from 'react'

const ProjectList = props => {
  if (props.projects.length === 0) return <p>No projects found</p>;

  return(
    <ul>
      {props.projects.map(project => (
        <li className='hi'>
          {project.name}
          <button onClick={props.deleteProject}>DELETE</button>
        </li>
        )
      )}
    </ul>
  );
};

export default ProjectList
