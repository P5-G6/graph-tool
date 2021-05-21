/* 
   retrieverKeys=[
       {key: 'value', group: 'body', extKey: 'name'}
   ]
*/

const formatter = ({ retrieverKeys = [], responses = [] }) => {
  const result = retrieverKeys.reduce(
    (acc, { key, group, extKey }, index) => {
      const { data, status } = responses[index];

      if (status === 200) {
        return { ...acc, data: { ...acc.data, [extKey]: data[group][key] } };
      }

      return { ...acc, hasError: true };
    },
    { hasError: false, data: {} }
  );
  return result;
};

export default formatter;
