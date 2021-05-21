import React, { useCallback, useEffect, useState } from "react";

import styled from "styled-components";
import List from "../../../../../components/List";
import ListItem from "../../../../../components/ListItem";

/* 
    leastSequence:
        1: "Not reachable"
        3: ["2", "3"]
        4: ["2", "4"]
    leastCost:
        1: "-"
        3: 10
        4: 10
*/

export default function NodeType({
  from = "",
  leastCost = {},
  leastSequence = {},
}) {
  const [keys, setKeys] = useState([]);

  const handleUpdateKeys = useCallback(() => {
    const foundKeys = Object.keys(leastCost);
    setKeys(foundKeys);
  }, [leastCost]);

  useEffect(() => {
    handleUpdateKeys();
  }, [handleUpdateKeys, from]);

  console.log({ keys, from, leastCost, leastSequence });

  const RenderItem = ({ 0: to }) => {
    console.log("to", to);
    return (
      <ListItem
        type="item-info"
        {...{ from, to }}
        cost={leastCost[`${to}`] ?? 0}
        sequence={leastSequence[`${to}`] ?? []}
      />
    );
  };

  return (
    <Container>
      <List data={keys} renderItem={RenderItem} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  max-height: 150px;
  width: 300px;
`;
