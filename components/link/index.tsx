import Link from 'next/link';
import React, { FunctionComponent, ReactElement } from 'react';
import { useRouter } from 'next/router';

interface LinkProps {
  href: string;
  children: ReactElement;
  activeClass: string;
}

const ActiveLink: FunctionComponent<LinkProps> = ({ children, ...props }) => {
  const { pathname } = useRouter();
  let className = children!.props.className || '';
  let _defaultClass = `${className} text-gray-100`;

  className =
    pathname === props.href
      ? `${className} text-indigo-400 ${props.activeClass}`
      : _defaultClass;

  return <Link {...props}>{React.cloneElement(children, { className })}</Link>;
};

export default ActiveLink;
