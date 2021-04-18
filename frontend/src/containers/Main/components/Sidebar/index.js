import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Creators from '../../redux/reducer';

import { Container } from './styles';

import Button from '../../../../components/Button';

export default function Sidebar() {
  const dispatch = useDispatch();

  const handleAdd = useCallback(() => {
    dispatch(Creators.sendValues());
  }, [dispatch]);

  return (
    <Container>
      <Button label='Add' onPress={handleAdd} />
    </Container>
  );
}
