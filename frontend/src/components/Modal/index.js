import React from 'react';

import { Container } from './styles';

import Card from '../Card';

function Modal({ visible = false, children, position = 'right' }) {
  return (
    visible && (
      <Container {...{position}}>
        <Card>{children}</Card>
      </Container>
    )
  );
}

export default Modal;
