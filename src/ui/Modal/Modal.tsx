import React, { ReactNode, useState, FC, CSSProperties } from 'react';
import classes from './Modal.module.css';
import Portal from '../Portal/Portal';

interface IModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  style?: CSSProperties;
}

const Modal: FC<IModalProps> = (props) => {
  const { children, isOpen, onClose, style } = props;

  return (
    <Portal>
      <div className={isOpen ? classes.openModal : classes.modal}>
        <div className={classes.overlay}>
          <div style={style} className={classes.content}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
