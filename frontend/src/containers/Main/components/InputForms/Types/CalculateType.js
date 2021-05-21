import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getGraphData } from "../../../redux/reducer";

import styled from "styled-components";
import Button from "../../../../../components/Button";
import Input from "../../../../../components/Input";
import useHttpReq from "../../../../../components/hooks/useHttpReq";
import CalculateShow from "../../CalculateShow";

/* 
    NOTE: THIS COMPONENT HAS A EXCLUSIVE STATE
*/

export default function CalculateType() {
  const nodes = useSelector(getGraphData.nodes);
  const [state, setState] = useState({ start_vertex: null, end_vertex: null });

  const onChange = useCallback(
    (key, value) => {
      const newState = { ...state, [key]: value };
      setState(newState);
    },
    [state]
  );

  const {
    call: callLeastSequence,
    data: leastSequence,
    loading: loadingSequence,
  } = useHttpReq("get", "dijkstra/least_sequence", {
    params: state,
  });
  const {
    call: callAdjacency,
    data: isAdjacent,
    loading: loadingAdjacent,
  } = useHttpReq("get", "check-if-are-adjacents", {
    params: {
      vertex_1: state.start_vertex,
      vertex_2: state.end_vertex,
    },
  });

  const handleSubmit = useCallback(() => {
    Promise.all([callLeastSequence(), callAdjacency()]);
  }, [callLeastSequence, callAdjacency]);

  return (
    <Container>
      <FormsContent>
        <div className="forms_row">
          <Input
            type="dropdown"
            options={nodes}
            onChange={(value) => onChange("start_vertex", value)}
          />
          <Input
            type="dropdown"
            options={nodes}
            onChange={(value) => onChange("end_vertex", value)}
          />
        </div>
        <Button
          onPress={handleSubmit}
          label="Calculate"
          backgroundColor="#000"
          labelColor="#fff"
        />
      </FormsContent>
      <div className="divider" />
      <ShowContent>
        <CalculateShow
          adjacency={{
            loading: loadingAdjacent,
            values: isAdjacent,
          }}
          sequence={{
            loading: loadingSequence,
            values: leastSequence,
          }}
        />
      </ShowContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 500px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  gap: 5px;

  .divider {
    width: 1px;
    height: 100%;
    background-color: #000;
  }
`;

export const FormsContent = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;

  gap: 5px;

  .forms_row {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 5px;
  }
`;

export const ShowContent = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  overflow: scroll;
`;
