export default function adaptNetwork(data = {}) {
  const keys = Object.keys(data);

  const result = keys.reduce(
    (acc, curr, id) => {
      const foundEdges = data[curr] || [];

      const node = { id, label: curr };

      const edges = foundEdges.map(([to, value, directioned = false]) => ({
        from: curr,
        to,
        label: value,
      }));

      return {
        nodes: [...acc.nodes, node],
        edges: [...acc.edges, ...edges],
      };
    },
    { nodes: [], edges: [] }
  );

  return result;
}
