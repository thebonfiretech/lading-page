import React from 'react';

import { Container, Box } from './styles';
import { FaUser, FaLock, FaEye } from "react-icons/fa";

import Home from '../../components/home';
import About from '../../components/about';
import IconsContainers from '../../components/iconsContainers';
import Footer from '../../components/footer';
import MembersPhotos from '../../components/membersPhotos';
import CardsComponents from '../../components/cardsComponents';
import Title from '../../components/title';

const Main = () => {

    return (
        <Container>
            <Home/>
             {/* <CardsComponents text="Inovação" Icon={FaUser}></CardsComponents>
            <Title title="happy or sad" size="60px"></Title> */}

        </Container>
    )
}

export default Main