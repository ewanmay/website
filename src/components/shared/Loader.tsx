import React, { ReactChild, ReactChildren } from 'react';
import LazyLoad from 'react-lazyload';
import { CSSTransition } from 'react-transition-group';

interface LoaderProps {
  children: ReactChild | ReactChildren
}

function Loader(props: LoaderProps) {
  return (
    <LazyLoad>
      <CSSTransition
        in={true}
        appear={true}
        timeout={5000}
        classNames="item"
        unmountOnExit
      >
        {props.children}
      </CSSTransition>
    </LazyLoad>);
}

export default Loader;
