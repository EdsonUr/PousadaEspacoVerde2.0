import { Container, Information, Title, Phrase, Image, InfoContainer, ButtonContainer } from "./style";

import { getWindowSize } from '../../utils/getWindowSize';
import { Button } from "../Button";
import { ComponentProps } from "../../utils/componentProps";


const Description = ({image, imageSide, title, firstParagraph, secondParagraph, buttonText, buttonOnClick, buttonSize='large'}: ComponentProps) =>{
    const windowSize = getWindowSize();
    return(
        <Container device={windowSize}>
            {
                windowSize !== 'mobile' && imageSide === 'left' && <Image src={image} />
            }
            <Information device={windowSize} src={image}>
                <InfoContainer device={windowSize} imageSide={imageSide}>
                    <Title device={windowSize}>
                        {title}
                    </Title>
                    <Phrase>
                        {firstParagraph}
                        <br/>
                        <br/>
                        {secondParagraph}
                    </Phrase>
                    <ButtonContainer device={windowSize}>
                        <Button type="secondary" text={buttonText} onClick={buttonOnClick} size={buttonSize} redirect/>
                    </ButtonContainer>
                </InfoContainer>
            </Information >
            {
                windowSize !== 'mobile' && imageSide === 'right' && <Image src={image} />
            }
        </Container>
    )
}

export default Description;