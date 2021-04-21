import React, { useCallback } from "react";

import { Container } from "./styles";

import {AiOutlineLoading} from 'react-icons/ai';

export default function Button({
  onPress = null,
  label = "",
  backgroundColor: bgColor = "#c8c8c8",
  labelColor = "#000",
  loading = false
}) {
  const handlePress = useCallback(() => {
    if (onPress) onPress();
  }, [onPress]);

  return (
    <Container onClick={handlePress} bgColor={bgColor} labelColor={labelColor} disabled={loading}>
       <div className="btn-label">{!loading ? label : '...'}</div>
    </Container>
  );
}
