import React from 'react';
import './styles.css';

const Layout = props => {
  return (
    <>
      <main className="content">
        {props.children}
      </main>
    </>
  );
};

export default Layout;