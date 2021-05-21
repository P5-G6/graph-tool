import React from "react";

import styled from "styled-components";

import { AiOutlineArrowRight } from "react-icons/ai";

export default function ItemInfo({ from = "", to = "", cost = 0, sequence }) {
  console.log("sequence", sequence);
  return (
    <Container>
      <Label>
        {from} <AiOutlineArrowRight /> {to}
      </Label>
      <Cost>{cost}</Cost>
      <Sequence>
        {typeof sequence === "string" ? sequence : sequence.join(" => ")}
      </Sequence>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  height: 25px;
  width: 100%;

  flex-grow: 0;
`;

const Label = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100px;
  align-items: center;
  justify-content: center;
  gap: 5px;

  text-align: center;
  color: #000;
  font-weight: bold;
`;

const Cost = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 60px;

  text-align: center;
  color: #000;
  font-weight: bold;
`;

const Sequence = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow: scroll;
  white-space: nowrap;

  .values {
    display: flex;
    flex-direction
  }
`;
