import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://github.com/pornarin/Final')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>My GitHub Projects</h2>
      <h3>Skill</h3>
      <p>HTML</p>
      <p>css</p>
      <p>Node js</p>
      <p>JavaScript</p>


      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;