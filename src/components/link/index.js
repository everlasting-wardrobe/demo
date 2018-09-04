import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import {createLocation} from 'history';
import LINK_PROPS from './props';


// filtered props that would cause error in <a>
const propsFilter = (props) => {
  const addToProps = (obj, prop) => {
    obj[prop] = props[prop];
    return obj;
  }

  return LINK_PROPS.reduce(addToProps, {});
}


export default withRouter(
  (props) => {
    return(
      <Link
        {...propsFilter(props)}
        onClick={event => {
          if (props.onClick) props.onClick(event);
          if (event.metaKey || event.ctrlKey) return;
          event.preventDefault();
            // This is copied from react-router's <Link /> component and is basically what it does internally
          const location =
            typeof props.to === 'string'
              ? createLocation(props.to, null, null, props.history.location)
              : props.to;
          return (window.location = props.history.createHref(location));
        }}
      />
    )
  }
)
