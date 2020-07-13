import React from 'react';
import './ProjectCard';
import './ProjectsTitle';
import ProjectsTitle from './ProjectsTitle';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <div className="Projects">
      Projects
      <ProjectsTitle/>
      <ProjectCard></ProjectCard>
    </div>
  );
}

export default Projects;