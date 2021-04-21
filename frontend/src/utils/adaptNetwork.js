const useArrow = (directioned) =>
  directioned ? { arrows: 'to' } : { arrows: { to: { enabled: false } } };

export default function adaptNetwork(data = {}) {
  const keys = Object.keys(data);

  const result = keys.reduce(
    (acc, curr) => {
      const foundEdges = data[curr] || [];

      const node = { id: curr, label: curr };

      const edges = foundEdges.map(([to, value, directioned = false]) => ({
        from: curr,
        to,
        label: value,
        ...useArrow(directioned),
      }));

      return {
        nodes: [...acc.nodes, node],
        edges: [...acc.edges, ...edges],
      };
    },
    { nodes: [], edges: [] }
  );

  console.log('Adaptee', result);

  return result;
}
