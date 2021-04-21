import React from 'react';

import Sidebar from '../Sidebar';

import { Container } from './styles';

import ConnectedModal from './connectedModal';

function Layout({ children }) {
  return (
    <>
      <ConnectedModal>JUJUTSU KAISER</ConnectedModal>
      <Container>
        <div className='side-bar'>
          <Sidebar />
        </div>
        <div className='main-content'>{children}</div>
      </Container>
    </>
  );
}

export default Layout;
