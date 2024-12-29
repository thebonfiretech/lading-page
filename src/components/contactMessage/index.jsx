import React, {useState} from 'react';
import { Container, ContainerForms, InformationsArea } from './styles.js';
import TextArea from '../textArea'
import Button from '../button'
import Input from '../input'
import Label from '../label'
import Title from '../title'
import Text from '../text'

const ContactMessage = () => {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [cellphone, setCellphone] = useState('')

    return (
        <Container>
            <Title  gradient="linear-gradient(89.99deg, #0139FE 46.2%, #0697C5 48.7%, #00FFB2 95.2%)" title="Contato"  size="48px" width="80%" />
            <ContainerForms>
                <InformationsArea>
                    <Label name="Nome" />
                    <Input type="text" placeholder="Ex: Ana Maria"  onChange={(value) => {setName(value)}} />
                    <Label name="Email" />
                    <Input type="email" placeholder="Ex: anamaria@gmail.com" onChange={(value) => {setEmail(value)}}/>
                    <Label name="Telefone" onChange={(value) => {setCellphone(value)}}/>
                    <Input type="tel" placeholder="Ex: (12)  3 4567-8910" />
                    <Label name="Mensagem" />
                    <TextArea placeholder="Digite sua mensagem aqui"/>
                </InformationsArea>
            </ContainerForms>
            <Button title="Enviar" />
        </Container>
    )
}


export default ContactMessage;