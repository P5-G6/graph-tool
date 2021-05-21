import React from 'react';

import styled from 'styled-components';

function ModalContentHeader({
  name = 'Recife',
  degree = { in: 0, edges: 0, out: 0 },
  onSelect,
  selectedParam,
}) {
  return (
    <Container>
      <div className='node-name'>
        {name.length > 10 ? `${name.slice(0, 10)}...` : name}
      </div>
      <div className='node-infos'>
        <Info
          selected={selectedParam === 'in'}
          onClick={() => onSelect('in')}
        >{`IN: ${degree.in}`}</Info>
        <Info
          selected={selectedParam === 'edges'}
          onClick={() => onSelect('edges')}
        >{`EDGES: ${degree.edges}`}</Info>
        <Info
          selected={selectedParam === 'out'}
          onClick={() => onSelect('out')}
        >{`OUT: ${degree.out}`}</Info>
      </div>
    </Container>
  );
}

export default ModalContentHeader;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;

  border-radius: 10px;

  .node-name {
    padding: 5px 10px;
    display: flex;
    flex: 1;
    color: #000;
    font-weight: bold;
    font-size: 18px;
  }

  .node-infos {
    display: flex;
    flex-direction: row;
    flex: 3;
    height: 100%;
    align-items: center;

    background-color: #c4c4c4;
    border-radius: 10px;

    border: 1px solid #980000;
  }
`;

const Info = styled.div`
  flex: 1;
  color: #000;
  background-color: ${({ selected = false }) => (selected ? '#fff' : 'none')};
  border-radius: 8px;
  padding: 5px 1px;
  text-align: center;
  cursor: pointer;
`;
