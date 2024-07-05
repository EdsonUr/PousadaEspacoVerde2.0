// Libs
import React from 'react';

// Assets
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as FacebookFooter } from '../../assets/facebookFooter.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as InstagramFooter } from '../../assets/instagramFooter.svg';
import { ReactComponent as WhatsApp } from '../../assets/whatsapp.svg';
import { ReactComponent as WhatsAppFooter } from '../../assets/whatsappFooter.svg';

// Styles
import { Button } from './styles';

// Props
interface Props {
    image: string;
}

type ImageMap = {
    [key: string]: {
        logo: JSX.Element
        link: string
    };
}

const images : ImageMap = {
    facebook: {
        logo: <Facebook/>,
        link: ''
    },
    instagram: {
        logo: <Instagram/>,
        link: 'https://www.instagram.com/espacoverdevicosa/'
    },
    whatsapp: {
        logo: <WhatsApp/>,
        link: 'https://api.whatsapp.com/send?phone=5585987731103'
    },
    facebookFooter: {
        logo: <FacebookFooter/>,
        link: ''
    },
    instagramFooter: {
        logo: <InstagramFooter/>,
        link: 'https://www.instagram.com/espacoverdevicosa/'
    },
    whatsappFooter: {
        logo: <WhatsAppFooter/>,
        link: 'https://api.whatsapp.com/send?phone=5585987731103'
    }
}

// Renderer
export function SocialMedias({image}: Props){
    return (
        <Button onClick={() => window.location.href = images[image].link}>
            {
                images[image].logo
            }
        </Button>
    );
}