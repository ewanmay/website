import React from 'react';
import ProjectCardTitle from './ProjectCardTitle';
import ProjectCardTag from './ProjectCardTag';
import LazyLoad from 'react-lazyload';
import { CSSTransition } from 'react-transition-group';
import GithubIcon from '../../assets/GithubIcon.svg'

interface ProjectCardProps {
  title: string,
  img: string,
  projectName: string,
  date: string,
  tags: string[],
  location: string,
  githubUrl: string,
  children: any
}

function ProjectCard(props: ProjectCardProps) {
  return (

    <div className="col-sm-12 col-md-3 flex py-2">
      <LazyLoad>
        <CSSTransition
          in={true}
          appear={true}
          timeout={5000}
          classNames="item"
          unmountOnExit
        >
          <div className="project-card flex column left p-2">
            <div className="project-card-image flex center-item">
              <img src={props.img} alt="" className="project-card-image transition"></img>
              <a href={props.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="overlay flex">
                <div className="project-card-image-overlay flex fill center-item column">
                  <div>View Github </div>
                  <img src={GithubIcon} alt="0" height={20} className="px-1"></img>
                </div>
              </a>
            </div>
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
