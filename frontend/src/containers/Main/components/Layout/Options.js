import React from "react";

import Option from "./Option";

import { Container, Content } from "./styles";

/* 
    options = [
        {title: String, icon: ?Component}
    ]
*/

export default function Options({ options = [] }) {
  return (
    <Container>
      <Content>
        {options.map((item) => (
          <Option {...item} key={`${item.title}`} />
        ))}
      </Content>
    </Container>
  );
}
