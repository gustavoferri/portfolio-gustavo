import React, { Children } from 'react';
import { Link } from '../routes';

const ActiveLink = ({children, ...props}) => {

  const child = Children.only(children);
  let className = child.props.className;

  return <Link {...props}>{React.cloneElement(clild, {className, additional: 'some props'})}</Link>;
}

export default ActiveLink;