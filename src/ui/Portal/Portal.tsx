import React, { ReactNode, FC } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  children?: ReactNode;
  element?: HTMLElement;
}

const Portal: FC<IPortalProps> = (props) => {
  const { children, element = document.body } = props;

  return createPortal(children, element);
};

export default Portal;
