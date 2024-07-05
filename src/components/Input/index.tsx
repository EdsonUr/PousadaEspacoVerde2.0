// Libs
import React from 'react';
import { Container, TextInput, ContainerTextArea } from './styles';

// Props
export interface InputProps{
    placeholder: string;
    image: JSX.Element;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    multiline?: boolean;
}

// Renderer
export function Input({placeholder, image, value, onChange, multiline=false}: InputProps){
    return (
        <Container multiline={multiline}>
            {image}
            {
                multiline ?
                <ContainerTextArea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                :
                <TextInput
                placeholder={placeholder}
                value={value}
                    onChange={onChange}
                />
            }
        </Container>
    );
}