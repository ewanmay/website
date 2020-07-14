import React from 'react';
import './ProjectCard';
import './ProjectsTitle';
import ProjectsTitle from './ProjectsTitle';
import ProjectCard from './ProjectCard';
import './styles.css'

function Projects() {
  return (
    <div className="Projects">
      <ProjectsTitle/>
      <ProjectCard></ProjectCard>
    </div>
  );
}

export default Projects;