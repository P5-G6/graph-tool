import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import context from "./context/context";
import Card from "../../../../components/Card";
import useTransition from "../../../../components/hooks/transition";

import styled from "styled-components";
import InputForms from "../InputForms";

import {
  slideInBottom,
  slideInTop,
  slideOutBottom,
  slideOutLeft,
  slideOutTop,
} from "../../../../appassets";

const Transitions = {
  "open-transition": slideInTop,
  "close-transition": slideOutTop,
};

function InputSection() {
  const {
    state: { selectedOption },
  } = useContext(context);
  const [visible, setVisible] = useState(selectedOption !== null);
  const { mode } = useTransition({
    visible,
    duration: 500,
  });

  useEffect(() => {
    setVisible(selectedOption != null);
  }, [selectedOption]);

  return (
    mode !== "hidden" && (
      <Container {...{ mode }}>
        <Card>
          <InputForms type={selectedOption} />
        </Card>
      </Container>
    )
  );
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
`;

export default InputSection;
