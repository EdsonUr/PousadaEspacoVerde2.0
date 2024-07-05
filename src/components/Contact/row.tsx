// Libs
import React from 'react';
import { ContactContainer, Text, ContainerContactRow } from './styles';
import { InfoMap } from '.';

// Props
export interface ContactProps{
    data: InfoMap;
}

// Renderer
export function ContactRow({data}: ContactProps){
    return (
        <ContainerContactRow>
        {
            Object.keys(data).map((key) => {
                return (
                    <ContactContainer key={key}>
                        {
                            data[key].logo
                        }
                        <Text>
                            {
                                data[key].text
                            }
                        </Text>
                    </ContactContainer>
                )
            })
        }
        </ContainerContactRow>
    );
}