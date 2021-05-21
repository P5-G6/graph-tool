const useArrow = (directioned) =>
  directioned ? { arrows: "to" } : { arrows: { to: { enabled: false } } };

export default function adaptNetwork(data = {}) {
  const keys = Object.keys(data);
  // let allDirectioned = true;

  const result = keys.reduce(
    (acc, curr) => {
      const foundEdges = data[curr] || [];

      const node = { id: curr, label: curr };

      let { allDirectioned } = acc;

      const edges = foundEdges.map(([to, value, directioned = false]) => {
        if (!directioned) {
          allDirectioned = directioned;
        }

        return {
          from: curr,
          to,
          title: value,
          label: `${value}`,
          ...useArrow(directioned),
        };
      });

      return {
        nodes: [...acc.nodes, node],
        edges: [...acc.edges, ...edges],
        allDirectioned,
      };
    },
    { nodes: [], edges: [], allDirectioned: true }
  );

  console.log("Adaptee", result);

  return result;
}
