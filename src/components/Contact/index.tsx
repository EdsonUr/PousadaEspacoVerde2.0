// Libs
import React from 'react';
import { Container } from './styles';

// Assets
import { ReactComponent as WhatsAppForms } from '../../assets/whatsappForms.svg';
import { ReactComponent as Mail } from '../../assets/mail.svg';
import { ContactRow } from './row';
import { Separator } from '../Atractives/styles';


export type InfoMap = {
    [key: string]: {
        logo: JSX.Element
        text: string
    };
}

const contactPhone : InfoMap = {
    whatsappMateus: {
        logo: <WhatsAppForms/>,
        text: '(85) 98773-1103'
    },
    whatsappEdson: {
        logo: <WhatsAppForms/>,
        text: '(85) 99992-1762'
    }
}

const contactEmail : InfoMap = {
    mailMateus: {
        logo: <Mail/>,
        text: 'mateus.carvalho@lanlink.com.br'
    },
    mailEdson: {
        logo: <Mail/>,
        text: 'e.urano@uol.com.br'
    }
}

// Renderer
export function Contact(){
    return (
        <Container>
            <ContactRow
                data={contactPhone}
            />
            <Separator/>
            <ContactRow
                data={contactEmail}
            />
        </Container>
    );
}