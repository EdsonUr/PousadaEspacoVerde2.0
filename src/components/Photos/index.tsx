// Libs
import React, { Fragment } from 'react';
import { Container, TextContainer, Title, ImageContainer } from './styles';
import { Button } from '../Button';

// Assets
import image1 from '../../assets/photos/quarto1.png';
import image2 from '../../assets/photos/quarto2.png';
import image3 from '../../assets/photos/quarto3.png';
import image4 from '../../assets/photos/quarto4.png';
import image5 from '../../assets/photos/quarto5.png';
import image6 from '../../assets/photos/quarto6.png';
import jardim1 from '../../assets/photos/jardim1.png';
import jardim2 from '../../assets/photos/jardim2.png';
import jardim3 from '../../assets/photos/jardim3.png';
import jardim4 from '../../assets/photos/jardim4.png';
import jardim5 from '../../assets/photos/jardim5.png';
import jardim6 from '../../assets/photos/jardim6.png';
import jardim7 from '../../assets/photos/jardim7.png';
import jardim8 from '../../assets/photos/jardim8.png';
import { Modal } from '../Modal';

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    jardim1,
    jardim2,
    jardim3,
    jardim4,
    jardim5,
    jardim6,
    jardim7,
    jardim8
];

// Renderer
export function Photos(){
    const [modalOpen, setModalOpen] = React.useState(false);
    const [activeImage, setActiveImage] = React.useState('');

    const openModal = (image: string) => {
        setModalOpen(true);
        setActiveImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <Container>
            <TextContainer>
                <Title>
                    @espacoverdevicosa
                </Title>
                <Button
                    onClick={() => window.location.href = 'https://www.instagram.com/espacoverdevicosa/'}
                    text='seguir'
                    type='tertiary'
                    transparent
                    size='xsmall'
                />
            </TextContainer>
            <ImageContainer>
                {
                    images.map((image, index) => {
                        return (
                            <Fragment key={index}>
                                <img src={image} alt='' key={index} height={250} onClick={() => openModal(image)}/>
                                {modalOpen && <Modal image={activeImage} onClose={closeModal} />}
                            </Fragment>
                        );
                    })
                }
            </ImageContainer>
        </Container>
    );
}