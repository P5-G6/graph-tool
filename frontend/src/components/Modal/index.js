import React from 'react';

import { Container } from './styles';

import CommonCard from '../CommonCard';

function Modal({ visible = false, children }) {
  return (
    visible && (
      <Container>
        <CommonCard>{children}</CommonCard>
      </Container>
    )
  );
}

export default Modal;
