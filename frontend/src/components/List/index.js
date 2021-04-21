import React from 'react';

import { Container, ItemContainer, ScrollableView } from './styles';

function List({ data = [], renderItem: RenderItem }) {
  const Item = (props) => {
    return (
      <ItemContainer>
        <RenderItem {...props} />
      </ItemContainer>
    );
  };

  return (
    <Container>
      <ScrollableView>
        {data.map((item, index) => (
          <Item {...item} index={index} key={`${index}`} />
        ))}
      </ScrollableView>
    </Container>
  );
}

export default List;
