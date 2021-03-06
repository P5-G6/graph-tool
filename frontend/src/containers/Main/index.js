import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Creators from "./redux/reducer";

import ConnectedNetwork from "./connectedNetwork";
import Frame from "../../components/Frame";

import Layout from "./components/Layout";

function MainScreen() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch
  // })

  useEffect(() => {
    dispatch(Creators.reset());
    dispatch(Creators.sync());
    return () => dispatch(Creators.reset());
  }, [dispatch]);

  return (
    <Frame>
      <Layout>
        <ConnectedNetwork />
      </Layout>
    </Frame>
  );
}

export default MainScreen;
