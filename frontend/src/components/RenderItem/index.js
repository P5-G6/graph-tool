import React from "react";

import { Container } from "./styles";

import { FiArrowRightCircle } from "react-icons/fi";

export default function RenderItem(props) {
  const {
    index,
    from,
    to = "",
    weight,
    directioned,
    0: _from = "",
    1: _weight = 0,
    2: _directioned = "",
  } = props;

  console.log("aa", props);

  return (
    <Container>
      <div className="render-item-section primary-section">
        <div className="item-value">{index}</div>
        <div
          className="item-value right"
          style={{ justifyContent: "flex-end" }}
        >
          {weight ?? _weight}
        </div>
      </div>
      <div className="render-item-section">
        <div className="item-value">{from ?? _from}</div>
        {(directioned ?? _directioned) && (
          <FiArrowRightCircle className="item-icon" />
        )}
        <div
          className="item-value right"
          style={{ justifyContent: "flex-end" }}
        >
          {to}
        </div>
      </div>
    </Container>
  );
}
