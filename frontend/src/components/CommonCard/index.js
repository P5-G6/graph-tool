import React from 'react';

import styled from 'styled-components';

export default function CommonCard({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 10px;
  background-color: #980000;

  color: #fff;
`;
