import React from 'react';
import { Container, SocialRede, BussinessInfo, Link } from './styles.js';

import { MdMailOutline } from 'react-icons/md'

const Contacts = ({ id }) => {
  return (
    <Container id={id}>
      <SocialRede>
        <Link href="https://instagram.com/thebonfiretech" target="_blank" rel="noopener noreferrer"><img src='../../public/images/insta.svg' /></Link>
        <Link href="mailto:thebonfiretech@gmail.com" target="_blank" rel="noopener noreferrer"> <MdMailOutline color='#eeeeee' size={35} /></Link>
      </SocialRede>
      <BussinessInfo>
        &copy;
        <p> Bonfire 2024</p>
      </BussinessInfo>
    </Container>
  );
};

export default Contacts;