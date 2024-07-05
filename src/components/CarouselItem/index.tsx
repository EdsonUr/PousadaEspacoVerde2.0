// Libs
import React from 'react';
import { Container, Title, Description } from './styles';
import { getWindowSize } from '../../utils/getWindowSize';

// Props
interface CarouselItemProps {
    image: string;
    title: string;
    description: string;
}

// Renderer
export function CarouselItem({ image, title, description }: CarouselItemProps){
    const windowSize = getWindowSize();
    return (
        <Container src={image} device={windowSize}>
            <Title device={windowSize}>
                {title}
            </Title>
            <Description device={windowSize}>
                {description}
            </Description>
        </Container>
    );
}