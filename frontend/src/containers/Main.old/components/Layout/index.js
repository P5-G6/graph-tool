import React from 'react';

import Sidebar from '../Sidebar';

import { Container } from './styles';

import ConnectedModal from './connectedModal';
import GraphInfosModal from '../GraphInfosModal';
import ConnectedModalContent from './connectedModalContent';
import AdjacencyVerification from '../AdjacencyVerification';

function Layout({ children }) {
  return (
    <>
      <ConnectedModal>
        <ConnectedModalContent />
      </ConnectedModal>
      <GraphInfosModal />
      <AdjacencyVerification />
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
