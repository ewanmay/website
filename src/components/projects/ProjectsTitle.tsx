import React from 'react';
import ProjectIcon from '../../assets/ProjectIcon.svg'
import Loader from '../shared/Loader';
function ProjectsTitle() {
  return (
    <Loader>
      <div className="projects-title flex column">
        From the workbench
      <img src={ProjectIcon} alt=""></img>
      </div>
    </Loader>
  );
}

export default ProjectsTitle;
