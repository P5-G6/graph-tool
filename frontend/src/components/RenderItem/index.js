import React from 'react';

import { Container } from './styles';

export default function RenderItem({
  index,
  from = '',
  to = '',
  weight = 0,
  directioned = false,
}) {
  return (
    <Container>
      <div className='section primary-section'>
        <strong>{index}</strong>
        <strong>{weight}</strong>
      </div>
      <div className='section'>
        <strong>{from}</strong>
        <strong>{`dir:${directioned}`}</strong>
        <strong>{to}</strong>
      </div>
    </Container>
  );
}
