const adaptEdgesByVertex = ({ vertexLabel = '', edges = [] }) =>
  edges.reduce(
    (acc, [to, weight, directioned]) => [
      ...acc,
      {
        from: vertexLabel,
        to,
        weight,
        directioned,
      },
    ],
    []
  );

export default adaptEdgesByVertex;
