import React from "react";

import { Container } from "./styles";

import Card from "../Card";
import useTransiion from "../hooks/transition";

const DURATION = 500;

function Modal({ visible = false, children, position = "right" }) {
  const { mode } = useTransiion({ visible, duration: DURATION });

  return (
    mode !== "hidden" && (
      <Container {...{ mode }} duration={DURATION} {...{ position }}>
        <Card>{children}</Card>
      </Container>
    )
  );
}

export default Modal;
