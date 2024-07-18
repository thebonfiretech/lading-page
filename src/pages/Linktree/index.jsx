import React from "react";

import { AiFillBehanceSquare, AiFillGithub } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';

import ButtonLink from "../../components/buttonLink";
import Contacts from '../../components/contacts';
import CameBack from '../../components/cameBack';
import Text from '../../components/text';
import Logo from '/images/logo.svg'

import { Container, ButtonArea, Footer, ImgArea } from './styles';

const Linktree = () => {

  const links = [
    {
      icone: <FaTiktok />,
      title: "TikTok",
      link: "https://www.tiktok.com/@thebonfiretech?_t=8mKVfsCY610&_r=1"
    },
    {
      icone: <AiFillBehanceSquare />,
      title: "Behance",
      link: "https://www.behance.net/bonfiretech"
    },
    {
      icone: <AiFillGithub />,
      title: "GitHub",
      link: "https://github.com/thebonfiretech"
    },
  ];

  return (
    <Container>
      <CameBack />
      <ImgArea>
        <img src={Logo} alt="Logo" />
      </ImgArea>
      <Text text="Explore nosso portfólio e redes sociais e descubra como transformamos ideias em soluções digitais criativas, inovadoras e de alta qualidade." width="70%" />
      <ButtonArea>
        {links.map((link, index) => (
          <ButtonLink key={index} Icone={link.icone} title={link.title} link={link.link} />
        ))}
      </ButtonArea>
      <Footer>
        <Contacts />
      </Footer>
    </Container>
  );
};

export default Linktree;
