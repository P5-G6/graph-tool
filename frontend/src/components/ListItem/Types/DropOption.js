import React, { useCallback } from "react";

import styled from "styled-components";

export default function DropOption({ title = "", value = "", onPress }) {
  const handlePress = useCallback(() => {
    if (onPress) onPress({ title, value });
  }, [onPress, value, title]);

  return (
    <Container onClick={handlePress}>
      <div className="drop-item-title">{title}</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 25px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px;

  .drop-item-title {
    display: flex;
    flex-direction: row;
    text-align: left;
    flex: 1;
  }

  cursor: pointer;

  &:hover {
    background-color: #c8c8c8;
  }
`;
