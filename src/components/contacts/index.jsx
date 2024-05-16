import React from 'react';
import { Container, SocialRede, BussinessInfo } from './styles.js';

import {MdMailOutline} from 'react-icons/md'

const Contacts = ({ id }) => {
  return (
    <Container id={id}>
      <SocialRede>
       <img src='../../public/images/insta.svg'/>
        <div>
           <p>Instagram</p>
        </div>
       
      <MdMailOutline color='#eeeeee' size={35}/>
      <p>Email</p>
      </SocialRede>
      <BussinessInfo>
        &copy;
      <p> Bonfire 2024</p>
      </BussinessInfo>
    </Container>
  );
};

export default Contacts;
