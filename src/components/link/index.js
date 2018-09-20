import React from 'react';
import styled from 'styled-components';
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


const BasicLink =  withRouter(
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

export default BasicLink;

export const NoneStyleLink = styled(BasicLink)`
  text-decoration: none;
  &:link, &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
`
export const RedButtonLink = styled(NoneStyleLink)`
  display: block;
  background-color: rgb(185,22,20);
  color: white;
  font-family: "Open Sans",sans-serif;
  font-size: 2rem;
  box-shadow: rgba(0,0,0,0.75) 10px 10px 51px 0px;
  border-color: rgb(185,22,20);
  border-radius: 3%;
  font-weight: 300;
  text-align: center;
  &:hover {
    color: white;
  }
`;

export const TransparentButtonLink = styled(NoneStyleLink)`
  display: block;
  font-size: 1.5rem;
  width: 18rem;
  border: 0.2rem white solid;
  font-family: sans-serif;
  color: white;
  text-align: center;
  padding: 0.5rem 1rem;
  &:hover {
    color: white;
  }
`; 