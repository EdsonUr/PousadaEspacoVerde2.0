// Libs
import React from 'react';
import { Container, Title, Separator } from './styles';
import { Input } from '../Input';
import emailjs from 'emailjs-com';

// Assets
import { ReactComponent as Person } from '../../assets/person.svg';
import { ReactComponent as Mail } from '../../assets/mail.svg';
import { ReactComponent as WhatsappForms } from '../../assets/whatsappForms.svg';
import { ReactComponent as Message } from '../../assets/message.svg';
import { Button } from '../Button';
import { Contact } from '../Contact';
import { getWindowSize } from '../../utils/getWindowSize';

// .ENV Variables
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
const userId = process.env.REACT_APP_EMAILJS_USER_ID || '';
const contactEmail = process.env.REACT_APP_CONTACT_EMAIL || '';

// Renderer
export function Forms(){
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [whatsapp, setWhatsapp] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isSending, setIsSending] = React.useState(false);
    const windowSize = getWindowSize();

    const handleSubmit = () => {
        // event.preventDefault();
        setIsSending(true);
        if(name === '' || email === '' || whatsapp === '' || message === '') {
            alert('Preencha todos os campos!');
            setIsSending(false);
            return;
        }
        const templateParams = {
            nome: name,
            email: email,
            telefone: whatsapp,
            message: message,
            to_email: contactEmail
        };
    
        emailjs.send(serviceId, templateId, templateParams, userId)
        .then((response) => {
            alert('Mensagem enviada com sucesso!');
        }, (error) => {
            alert('Ocorreu um erro ao enviar a mensagem, tente novamente mais tarde.');
        });
        setTimeout(() => {
            setIsSending(false);
        }, 2000);
      };

    return (
        <Container>
            <Title device={windowSize}>
                Entre em contato conosco
            </Title>
            <Input
                placeholder="Nome"
                image={<Person/>}
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <Input
                placeholder="Email"
                image={<Mail/>}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <Input
                placeholder="Whatsapp"
                image={<WhatsappForms/>}
                value={whatsapp}
                onChange={(event) => setWhatsapp(event.target.value)}
            />
            <Input
                placeholder="Mensagem"
                image={<Message/>}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                multiline
            />
            <Separator/>
            <Button
                text='enviar'
                size='small'
                type='primary'
                onClick={handleSubmit}
                fullWidth
                loading={isSending}
            />
            <Separator/>
            <Contact/>
        </Container>
    );
}