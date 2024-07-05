// Libs
import React from 'react';

// Styles
import { Container, SocialMediasContainer, Description } from './styles';

// Hooks
import { getWindowSize } from '../../utils/getWindowSize';
import { SocialMedias } from '../SocialMedias';

const text = {
    desktop: "Pousada Espaço Verde - Viçosa do Ceará, Ceará, Brasil",
    tablet: "Pousada Espaço Verde - Viçosa do Ceará, Ceará, Brasil",
    mobile: "Pousada Espaço Verde"
}

// Renderer
export function TopBar(){
    const windowSize = getWindowSize();
    return (
        <Container device={windowSize}>
            <SocialMediasContainer>
                <SocialMedias image='whatsapp'/>
                <SocialMedias image='instagram'/>
                <SocialMedias image='facebook'/>
            </SocialMediasContainer>
            <Description>
                {text[windowSize]}
            </Description>
        </Container>
    );
}