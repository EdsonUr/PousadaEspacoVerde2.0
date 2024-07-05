// Libs
import React from 'react';
import { Container } from './styles';
import { getWindowSize } from '../../utils/getWindowSize';

// Props
interface Props {
    children: React.ReactNode;
    title?: string;
}

// Renderer
export function Section({ children, title='' }: Props){
    const windowSize = getWindowSize();
    return (
        <Container device={windowSize} id={title}>
            {children}
        </Container>
    );
}