import React, { useContext, useState, useEffect, useCallback } from "react";
import context from "./context/context";
import { useDispatch } from "react-redux";

import Creators from "../../redux/reducer";

import Card from "../../../../components/Card";
import useTransition from "../../../../components/hooks/transition";

import styled from "styled-components";
import InputForms from "../InputForms";

import { slideInTop, slideOutTop } from "../../../../appassets";

const Transitions = {
  "open-transition": slideInTop,
  "close-transition": slideOutTop,
};

const SubmitTypes = {
  "add-node": Creators.addNode,
  "add-edge": Creators.addEdge,
  calculate: () => {},
};

function InputSection() {
  const {
    state: { selectedOption },
  } = useContext(context);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(selectedOption !== null);
  const { mode } = useTransition({
    visible,
    duration: 500,
  });

  const handleSubmitForms = useCallback(
    (values) => {
      dispatch(SubmitTypes[`${selectedOption}`](values));
    },
    [dispatch, selectedOption]
  );

  useEffect(() => {
    setVisible(selectedOption != null);
  }, [selectedOption]);

  return mode !== "hidden" ? (
    <Container {...{ mode }}>
      <Card>
        <InputForms type={selectedOption} onSubmit={handleSubmitForms} />
      </Card>
    </Container>
  ) : null;
}

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 100px;
  left: 0px;
  right: 0px;

  animation-name: ${({ mode }) => Transitions[mode] ?? "none"};
  animation-duration: 0.5s;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 400;
`;

export default InputSection;
