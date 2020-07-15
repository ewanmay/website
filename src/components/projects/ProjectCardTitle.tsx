import React from 'react';

interface ProjectCardTitleProps {
  title: string,
  date: string,
  project: string
}

function ProjectCardTitle({ title, date, project }: ProjectCardTitleProps) {
  return (
    <div className="flex column left pt-2">
      <div className="project-card-title py-1">
        {title}
      </div>
      <div className="project-card-position">
        {project},
  <i>{" " + date}</i>
      </div>
    </div>
  );
}

export default ProjectCardTitle;
