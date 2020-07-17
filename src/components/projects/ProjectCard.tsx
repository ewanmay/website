import React from 'react';
import ProjectCardTitle from './ProjectCardTitle';
import ProjectCardTag from './ProjectCardTag';
import LazyLoad from 'react-lazyload';
import { CSSTransition } from 'react-transition-group';

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

    <div className="col-3 flex">
      <LazyLoad>
        <CSSTransition
          in={true}
          appear={true}
          timeout={5000}
          classNames="item"
          unmountOnExit
        >
          <div className="project-card flex column left p-2">
            <img src={props.img} alt="" className="project-card-image"></img>
            <ProjectCardTitle title={props.title} project={props.projectName} date={props.date}></ProjectCardTitle>
            <div className="flex">
              {props.tags.map(tag => <ProjectCardTag tag={tag} key={tag}></ProjectCardTag>)}
            </div>
            <div className="project-card-location pt-1 pb-2">
              {props.location}
            </div>
            {props.children}
          </div>
        </CSSTransition>
      </LazyLoad >
    </div>
  );
}

export default ProjectCard;
