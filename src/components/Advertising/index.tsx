// Libs
import React from 'react';
import { Container, TitleContainer, Title, ChildrenContainer, BannerContainer } from './styles';
import { getWindowSize } from '../../utils/getWindowSize';

// Props
interface Props {
    children?: React.ReactNode;
    background_opacity?: boolean;
    title: string;
}

// Renderer
export function Advertising({title, background_opacity=false, children=false} : Props){
    const windowSize = getWindowSize();
    return (
        <Container background_opacity={background_opacity} has_children={Boolean(children)}>
            <BannerContainer has_children={Boolean(children)} device={windowSize}>
                <TitleContainer device={windowSize} has_children={Boolean(children)}>
                    <Title>
                        {title}
                    </Title>
                </TitleContainer>
            </BannerContainer>
            <ChildrenContainer>
                {
                    children
                }
            </ChildrenContainer>
        </Container>
    );
}
