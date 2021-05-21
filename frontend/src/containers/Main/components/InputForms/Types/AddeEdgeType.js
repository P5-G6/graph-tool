import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";

import { getGraphData } from "../../../redux/reducer";

import styled from "styled-components";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/Input";

const DEFAULT_VALUE = { directioned: false };

export default function AddVertex({ onSubmit, onChange }) {
  // const [selectedNodes, setSelectedNodes] = useState([]);
  const nodes = useSelector(getGraphData.nodes);
  return (
    <Container>
      <div className="input_row">
        <div className="input_item">
          <Input
            type="dropdown"
            options={nodes}
            onChange={(value) => onChange("origin", value)}
          />
        </div>
        <div className="input_item">
          <Input
            type="dropdown"
            options={nodes}
            onChange={(value) => onChange("destiny", value)}
          />
        </div>
      </div>
      <div className="input_row">
        <div className="rout_item">
          <Input
            type="text"
            placeholder="Weight"
            onChange={(value) => onChange("weight", value)}
          />
        </div>
        <div className="row_item">
          <Input
            type="switch"
            onChange={(value) => onChange("directioned", value)}
          />
        </div>
        <div className="row_item">
          <Button
            label="Create"
            labelColor="#fff"
            backgroundColor="#000"
            width="100%"
            onPress={onSubmit}
          />
        </div>
      </div>
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
