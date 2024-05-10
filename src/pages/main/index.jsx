import React from 'react';

import { Container, Box } from './styles';
import { FaUser, FaLock, FaEye } from "react-icons/fa";

import Navbar from '../../components/navbar';
import Contacts from '../../components/contacts';
import IconsContainers from '../../components/iconsContainers';
import Footer from '../../components/footer';
import MembersPhotos from '../../components/membersPhotos';
import CardsComponents from '../../components/cardsComponents';
import Title from '../../components/title';

const Main = () => {

    return (
        <Container>
            <IconsContainers Icon={FaUser}/>
             {/* <CardsComponents text="Inovação" Icon={FaUser}></CardsComponents>
            <Title title="happy or sad" size="60px"></Title> */}

        </Container>
    )
}

export default Main