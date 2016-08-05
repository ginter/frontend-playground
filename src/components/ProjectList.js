import React from 'react'

const ProjectList = ({ projects, deleteProject }) => {
  if (projects.length === 0) return <p>No projects found</p>;

  return(
    <ul>
      {projects.map(project => (
        <li key={project.uid} className='project-row'>
          {project.name}
          <button onClick={() => deleteProject(project.uid)}>DELETE</button>
        </li>
        )
      )}
    </ul>
  );
}

export default ProjectList
