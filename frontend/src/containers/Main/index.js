import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Creators from './redux/reducer';

import Frame from '../../components/Frame';

import Layout from './components/Layout';

import ConnectedNetwork from './connectedNetwork';

function MainScreen() {
  const dispatch = useDispatch();
  const handleFlush = useCallback(() => {
    dispatch(Creators.reset());
  }, [dispatch]);

  useEffect(() => {
    handleFlush(); // NOTE: Vai resetar os grafos toda vez que renderizar a tela
  }, [handleFlush]);

  return (
    <Frame>
      <Layout>
        <ConnectedNetwork />
      </Layout>
    </Frame>
  );
}

export default MainScreen;
