// Libs
import React from 'react';
import { Container, Title, List, AmenitieItem, Description } from './styles';

// Assets
import AirConditioner from '../../assets/arcondicionado.png';
import Bathroom  from '../../assets/banheiro.png';
import Location  from '../../assets/localizacao.svg';
import Fridge  from '../../assets/geladeira.png';
import Phone  from '../../assets/telefone.png';
import Television  from '../../assets/televisao.png';
import Wifi  from '../../assets/wifi.png';
import { getWindowSize } from '../../utils/getWindowSize';


const amenities = [
    {
        name: "Ar condicionado",
        image: AirConditioner
    },
    {
        name: "Banheiro",
        image: Bathroom
    },
    {
        name: "Localização Privilegiada",
        image: Location
    },
    {
        name: "Cozinha",
        image: Fridge
    },
    {
        name: "Atendimento",
        image: Phone
    },
    {
        name: "Televisão",
        image: Television
    },
    {
        name: "Wifi",
        image: Wifi
    }
];

// Renderer
export function Amenities(){
    const windowSize = getWindowSize();
    return (
        <Container device={windowSize}>
            <Title>
                Todas nossas acomodações podem dispor dos seguintes itens:
            </Title>
            <List>
                {
                    amenities.map((amenity, index) => (
                        <AmenitieItem key={index}>
                            <img src={amenity.image} alt={amenity.name}/>
                            <Description>{amenity.name}</Description>
                        </AmenitieItem>
                    ))
                }
            </List>
        </Container>
    );
}