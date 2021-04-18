import React from 'react';

import Frame from '../../components/Frame';

import Layout from './components/Layout';

import ConnectedNetwork from './connectedNetwork';

function MainScreen() {
  return (
    <Frame>
      <Layout>
        <ConnectedNetwork />
      </Layout>
    </Frame>
  );
}

export default MainScreen;
