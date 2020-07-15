import React from 'react';
import ProjectCardTitle from './ProjectCardTitle';
import ProjectCardTag from './ProjectCardTag';

interface ProjectCardProps {
  title: string,
  img: string,
  projectName: string,
  date: string,
  tags: string[],
  location: string,
  children: any
}

function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="project-card flex column left col-3 p-2">
      <img src={props.img} alt="" className="project-card-image"></img>
      <ProjectCardTitle title={props.title} project={props.projectName} date={props.date}></ProjectCardTitle>
      <div className="flex">
        {props.tags.map(tag => <ProjectCardTag tag={tag}></ProjectCardTag>)}
      </div>
      <div className="project-card-location pt-1 pb-2">
        {props.location}
      </div>
      {props.children}
    </div>
  );
}

export default ProjectCard;
