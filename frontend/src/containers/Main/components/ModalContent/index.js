import React, { useCallback, useState } from 'react';

import styled from 'styled-components';
import List from '../../../../components/List';
import RenderItem from '../../../../components/RenderItem';

import ModalContentHeader from './Header';

import { FiTrash } from 'react-icons/fi';

const listMock = [
  { from: 'Recife', to: 'Olinda', weight: 10, directioned: true },
  { from: 'Recife', to: 'Olinda', weight: 10, directioned: true },
  { from: 'Recife', to: 'Olinda', weight: 10, directioned: true },
  { from: 'Recife', to: 'Olinda', weight: 10, directioned: true },
  { from: 'Recife', to: 'Olinda', weight: 10, directioned: true },
  { from: 'Recife', to: 'Olinda', weight: 10, directioned: true },
  { from: 'Recife', to: 'Olinda', weight: 10, directioned: true },
  { from: 'Recife', to: 'Olinda', weight: 10, directioned: true },
  { from: 'Recife', to: 'Olinda', weight: 10, directioned: true },
  { from: 'Recife', to: 'Olinda', weight: 10, directioned: true },
];

function ModalContent({ adjacencyList = {}, degree, name, onDelete }) {
  const [selectedParam, setSelectedParam] = useState('in');

  const handleSelectParam = useCallback(
    (param) => {
      if (param !== selectedParam) {
        setSelectedParam(param);
      }
    },
    [selectedParam]
  );

  const handleDelete = useCallback(() => {
    if (onDelete) onDelete();
  }, [onDelete]);

  return (
    <Container>
      <div className='section-title'>
        <div className='actions'>
          <div className='action' onClick={handleDelete}>
            <FiTrash />
          </div>
        </div>
        GRADE
      </div>
      <div className='header-section'>
        <ModalContentHeader
          {...{ name, degree, selectedParam }}
          onSelect={handleSelectParam}
        />
      </div>
      <div className='section-title'>ADJACENCY</div>
      <div className='section-list'>
        <List
          data={adjacencyList[selectedParam] ?? []}
          renderItem={RenderItem}
        />
      </div>
    </Container>
  );
}

export default ModalContent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  min-height: 200px;
  max-height: 300px;
  width: 350px;

  overflow: hidden;

  .header-section {
    display: flex;
    padding-bottom: 10px;
  }

  .section-title {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 10px;

    .actions {
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;

      gap: 5px;

      .action {
        display: flex;
        cursor: pointer;
      }
    }
  }

  .section-list {
    display: flex;
    flex: 1;
    width: 100%;
    overflow-y: scroll;
  }
`;
