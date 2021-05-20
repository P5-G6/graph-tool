import React from "react";

import styled from "styled-components";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button";

export default function AddNode({values, onSubmit, onChange }) {
  return (
    <Container>
      <Input placeholder='Node' type="text" onChange={(value) => onChange('label', value)} />
      <Button label="Create" backgroundColor="#000" labelColor="#fff" width={'100%'} onPress={onSubmit}  />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 5px;
`;
