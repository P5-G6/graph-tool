import React from "react";

import styled from "styled-components";

const Row = ({ label = "", values = "", loading = false }) => (
  <div className="values-row">
    <div className="label">{label}</div>
    <div className="values">{!loading ? values : null}</div>
  </div>
);

const formatText = (values = []) => {
  return typeof values !== "string" && values.length > 1
    ? values.join(", ")
    : values;
};

export default function InputType({ adjacency = {}, sequence = {} }) {
  console.log("inputType", adjacency, sequence);

  return (
    <Container>
      <Row
        label="Least Cost"
        loading={sequence.loading}
        values={sequence.values?.body?.least_sequence?.least_cost}
      />
      <Row
        label="Sequence"
        values={formatText(sequence.values?.body?.least_sequence?.least_path)}
      />
      <Row
        label="Adjacent"
        values={`${adjacency.values?.body?.are_adjacents}`}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;

  .values-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    width: 100%;

    .label {
      display: flex;
      font-weight: bold;
      font-size: 12px;
    }
    .values {
      display: flex;
      font-weight: normal;
      font-size: 15px;
    }
  }
`;
