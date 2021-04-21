import React, { useEffect, useCallback } from 'react';
import Graph from 'react-vis-network-graph';
import { Container } from './styles';

// const mock = {
//   nodes: [
//     { id: 1, label: 'Node 1', title: 'node 1 tootip text' },
//     { id: 2, label: 'Node 2', title: 'node 2 tootip text' },
//     { id: 3, label: 'Node 3', title: 'node 3 tootip text' },
//     { id: 4, label: 'Node 4', title: 'node 4 tootip text' },
//     { id: 5, label: 'Node 5', title: 'node 5 tootip text' },
//   ],
//   edges: [
//     { from: 1, to: 2, label: 'teste' },
//     { from: 1, to: 3, label: 'teste' },
//     { from: 2, to: 4 },
//     { from: 2, to: 5 },
//   ],
// };

function Network({ nodes = [], edges = [], loading = false, onPress = null }) {
  const handlePress = useCallback(
    (event) => {
      if (onPress) onPress(event);
    },
    [onPress]
  );

  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: '#000000',
    },
    height: '100%',
    width: '100%',
  };

  const events = {
    select: handlePress,
  };

  useEffect(() => {}, [nodes, edges]);
  return (
    <Container>
      {!loading ? (
        <Graph graph={{ nodes, edges }} options={options} events={events} />
      ) : null}
    </Container>
  );
}

export default Network;
