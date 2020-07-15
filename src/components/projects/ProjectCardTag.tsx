import React from 'react';

interface ProjectCardTagInterface {
  tag: string
}

function ProjectCardTag({tag}: ProjectCardTagInterface) {
  return (
    <div className="project-card-tag px-1">
      {tag}
    </div>
  );
}

export default ProjectCardTag;
