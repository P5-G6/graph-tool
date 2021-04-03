import React, { useCallback } from "react";

import { Container } from "./styles";

export default function Button({
  onPress = null,
  label = "",
  backgroundColor: bgColor = "#c8c8c8",
  labelColor = "#000",
}) {
  const handlePress = useCallback(() => {
    if (onPress) onPress();
  }, [onPress]);

  return (
    <Container onClick={handlePress} bgColor={bgColor} labelColor={labelColor}>
      <div className="btn-label">{label}</div>
    </Container>
  );
}
