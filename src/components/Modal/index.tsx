// Libs
import React from 'react';
import { Container, Content } from './styles';
import { Button } from '../Button';

// Props
interface Props {
    image: string;
    onClose: () => void;
}


// Renderer
export function Modal({ image, onClose }: Props){
    return (
      <Container>
        <Content>
          <Button
            onClick={onClose}
            text='fechar'
            size='small'
            type='primary'
          />
          <img src={image} alt="" style={{width: '100%', height: '100%', marginTop: 10}}/>
        </Content>
    </Container>
    );
}