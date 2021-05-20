import React from "react";

import styled from "styled-components";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/Input";

export default function AddVertex({ onSubmit, onChange }) {
  return (
    <Container>
      <div className="input_row">
        <div className="input_item">
          <Input onChange={(value) => onChange("nodeA", value)} />
        </div>
        <div className="input_item">
          <Input onChange={(value) => onChange("nodeB", value)} />
        </div>
      </div>
      <Button
        label="Create"
        labelColor="#fff"
        backgroundColor="#000"
        width="100%"
        onPress={onSubmit}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  gap: 5px;

  .input_row {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10px;

    width: 98%;

    .row_item {
      display: flex;
      flex: 1;
    }
  }
`;
