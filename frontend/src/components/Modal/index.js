import React from 'react';

import { Container } from './styles';

import CommonCard from '../CommonCard';

function Modal({ visible = false, children, position = 'right' }) {
  return (
    visible && (
      <Container {...{position}}>
        <CommonCard>{children}</CommonCard>
      </Container>
    )
  );
}

export default Modal;
