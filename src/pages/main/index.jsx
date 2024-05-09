import React from 'react';

import { Container, Box } from './styles';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import MembersPhotos from '../../components/membersPhotos';

const Main = () => {

    return (
        <Container>
               <MembersPhotos photo="../../../public/images/logo.svg" ></MembersPhotos>
             <MembersPhotos ></MembersPhotos>
             <MembersPhotos ></MembersPhotos>
             <MembersPhotos ></MembersPhotos>

        </Container>
    )
}

export default Main