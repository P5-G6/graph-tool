import React, { useCallback, useState } from 'react';
import CommonCard from '../../../../components/CommonCard';
import TextInput from '../../../../components/TextInput';
import api from '../../../../services/api';

import { TiAdjustBrightness } from 'react-icons/ti';

import { Container, FloatingConttent } from './styles';

export default function AdjacencyVerification() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleReq = useCallback(async () => {
    const value = input;

    if (value.length > 1) {
      const [vertex_1 = null, vertex_2 = null] = value.split(' ');

      if (vertex_1 !== null && vertex_2 !== null) {
        setLoading(true);
        const { data = {}, status } = await api.get(
          'check-if-are-adjacents',
          {params: {vertex_1, vertex_2}}
        );

        if (status === 200) {
          const { body: {are_adjacents: _result} = false } = data;

          setResult(_result);
          alert(_result)

          setInput('');
        }
        setLoading(false);
      }
    }
  },[input]);

  const handleInputChange = (value) => {
    setInput(value);
  };

  return (
    <FloatingConttent>
      <CommonCard>
        <Container>
          <div className='text-input'>
            <TextInput
              placeholder='Verify adjacency...'
              onChange={handleInputChange}
              value={input}
              disabled={loading}            />
          </div>
          <div onClick={handleReq} className='submit-button'>
            <TiAdjustBrightness style={{ color: '#000' }} />
          </div>
        </Container>
      </CommonCard>
    </FloatingConttent>
  );
}
