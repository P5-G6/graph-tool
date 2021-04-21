import React from 'react';

import { Container } from './styles';

function Modal({ visible = false, children }) {
  return visible && <Container>{children}</Container>;
}

export default Modal;
