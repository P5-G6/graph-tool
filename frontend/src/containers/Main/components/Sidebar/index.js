import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Creators, { get } from '../../redux/reducer';

import { Container } from './styles';

import Button from '../../../../components/Button';
import ConnectedTextInput from './connectedTextInput';
import ConnectedList from './connectedList';
// import List from '../../../../components/List';
import RenderItem from '../../../../components/RenderItem';

export default function Sidebar() {
  const dispatch = useDispatch();
  const loading = useSelector(get.loading);

  const handlePushValue = useCallback(() => {
    dispatch(Creators.pushValue());
  }, [dispatch]);

  // const handleSubmit = useCallback(() => {
  //   dispatch(Creators.sendValues());
  // }, [dispatch]);

  return (
    <Container>
      <div className='input-section'>
        <div className='text-input'>
          <ConnectedTextInput placeholder='EDGE...' onSubmit={handlePushValue} />
        </div>
        <div className='add-button'>
          <Button
            label='+'
            onPress={handlePushValue}
            backgroundColor='#000000'
            labelColor='#fff'
            loading={loading}
          />
        </div>
      </div>
      <div className='list-section'>
        <ConnectedList renderItem={RenderItem} />
      </div>
      {/* <Button
        label='Submit'
        onPress={handleSubmit}
        backgroundColor='#AEBFE0'
        labelColor='#000'
      /> */}
    </Container>
  );
}
