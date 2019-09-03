import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

const fullScreen = props => {
  const onCloseHandler = e => {
    e.preventDefault();
    props.fullScreenClosed();
  };

  return (
    <>
      <button onClick={onCloseHandler} className="icon-close">
        <FontAwesomeIcon icon="times" />
      </button>
      <div
        className="full-screen"
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
        onClick={props.fullScreenClosed}
      >
        {props.children}
      </div>
    </>
  );
};

export default React.memo(
  fullScreen,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
