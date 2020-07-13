import React from 'react';
import './ProjectCardBody';
import './ProjectCardTag';
import './ProjectCardTitle';
import ProjectCardTitle from './ProjectCardTitle';
import ProjectCardTag from './ProjectCardTag';
import ProjectCardBody from './ProjectCardBody';

function ProjectCard() {
  return (
    <div className="ProjectCard">
      ProjectCard
      <ProjectCardTitle></ProjectCardTitle>
      <ProjectCardTag></ProjectCardTag>
      <ProjectCardBody></ProjectCardBody>
    </div>
  );
}

export default ProjectCard;
