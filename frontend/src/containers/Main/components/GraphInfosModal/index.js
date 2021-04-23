import React from 'react';
import CommonCard from '../../../../components/CommonCard';

import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { get } from '../../redux/reducer';

const RenderLine = ({label = '', value = 0}) => (
  <div className='value-line'>
    <div className='label'>{label}</div>
    <div className='value'>{value}</div>
  </div>
)

function GraphInfosModal() {
  const graphOrder = useSelector(get.graphOrder);
  const graphSize = useSelector(get.graphSize)

  return (
    <Floating>
      <CommonCard>
        <Container>
          <RenderLine label={'ORDER: '} value={graphOrder} />
          <RenderLine label={'SIZE: '} value={graphSize} />
        </Container>
      </CommonCard>
    </Floating>
  );
};

export default GraphInfosModal;

const Floating = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 5px;
  width: 150px;

  .value-line {
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: row;
    alig-items: center;
    justify-content:  flex-end;

    .label {
      display: flex;
      flex: 1;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
    }

    .value {
      display: flex;
      font-size: 15px;
      text-align: right;
    }
  }
`;
