import React from 'react';

import { Container } from './styles';

import { FiArrowRightCircle } from 'react-icons/fi';

export default function RenderItem({
  index,
  from = '',
  to = '',
  weight = 0,
  directioned = false,
}) {
  return (
    <Container>
      <div className='render-item-section primary-section'>
        <div className='item-value'>{index}</div>
        <div className='item-value right' style={{ justifyContent: 'flex-end' }}>
          {weight}
        </div>
      </div>
      <div className='render-item-section'>
        <div className='item-value'>{from}</div>
        {directioned && <FiArrowRightCircle className='item-icon' />}
        <div className='item-value right' style={{ justifyContent: 'flex-end' }}>
          {to}
        </div>
      </div>
    </Container>
  );
}
