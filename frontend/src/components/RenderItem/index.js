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
      <div className='section primary-section'>
        <div className='value'>{index}</div>
        <div className='value right' style={{ justifyContent: 'flex-end' }}>
          {weight}
        </div>
      </div>
      <div className='section'>
        <div className='value'>{from}</div>
        {directioned && <FiArrowRightCircle className='icon' />}
        <div className='value right' style={{ justifyContent: 'flex-end' }}>
          {to}
        </div>
      </div>
    </Container>
  );
}
