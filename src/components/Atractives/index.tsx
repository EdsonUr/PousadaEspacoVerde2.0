// Libs
import React from 'react';
import { Container, Image, InfoContainer, Title, Description, Separator, ImageSeparator } from './styles';
import { ComponentProps } from '../../utils/componentProps';

// Assets
import { Button } from '../Button';
import { getWindowSize } from '../../utils/getWindowSize';

// Renderer
export function Atractives({image, imageSide, title, firstParagraph, secondParagraph, buttonText, buttonOnClick, buttonSize='large'}: ComponentProps) {
    const windowSize = getWindowSize();
    return (
        <Container device={windowSize}>
            {
                imageSide === 'left' &&
                <>
                    <Image src={image} device={windowSize}/>
                    <ImageSeparator device={windowSize}/>
                </>
            }
            <InfoContainer device={windowSize}>
                <Title device={windowSize}>
                    {title}
                </Title>
                <Separator/>
                <Description>
                    {firstParagraph}
                    <br/>
                    <br/>
                    {secondParagraph}
                </Description>
                <Separator/>
                <Button onClick={buttonOnClick} size={buttonSize} text={buttonText} type='primary' fullWidth={windowSize === 'mobile'} redirect />
            </InfoContainer>
            {
                imageSide === 'right' &&
                <>
                    <ImageSeparator device={windowSize}/>
                    <Image src={image} device={windowSize}/>
                </>
            }
        </Container>   
    );
}