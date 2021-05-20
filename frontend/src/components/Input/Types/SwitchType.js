import React, { useCallback, useState } from "react";

import styled, { keyframes } from "styled-components";
import useTransiion from "../../hooks/transition";

const DURATION = 500;

// SECTION ANIMATIONS:

const toTrue = keyframes`
  0% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
    background-color: #fff;
  }
  100% {
    -webkit-transform: translateX(25px);
            transform: translateX(25px);
    background-color: #000;
  }
`;

const toFalse = keyframes`
  0% {
    -webkit-transform: translateX(25px);
            transform: translateX(25px);
    background-color: #000;
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
    background-color: #fff;
  }
`;

// SECTION TRANSITIONS ADAPTER:

const Transitions = {
  "open-transition": toTrue,
  "close-transition": toFalse,
};

// SECTION MAIN:

export default function SwitchType({ onChange }) {
  const [checked, setChecked] = useState(false);
  const { mode } = useTransiion({ visible: checked, duration: DURATION });

  const handleCheck = useCallback(() => {
    const value = !checked;
    setChecked(value);
    if (onChange) onChange(value);
  }, [onChange, checked]);

  return (
    <Container>
      <Handle
        onClick={handleCheck}
        {...{ mode }}
        animation={Transitions[mode] ?? "none"}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 25px;
  width: 50px;

  border-radius: 25px;

  align-items: center;
  justify-content: flex-start;
  padding: 2px;

  border: 1px solid black;
`;

const handleTranslate = {
  showing: "-webkit-transform: translateX(25px);",
};

const backgroundColors = {
  showing: "#000",
  hidden: "#fff",
};

const Handle = styled.div`
  display: flex;
  height: 24px;
  width: 24px;

  border: 1px solid #000;

  ${({ mode }) => handleTranslate[mode] ?? ""}

  animation-name: ${({ animation }) => animation};
  animation-duration: ${DURATION / 1000}s;

  border-radius: 12px;

  background-color: ${({ mode }) => backgroundColors[mode]};

  cursor: pointer;
`;
