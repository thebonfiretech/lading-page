import React from 'react';
import { Container, Align } from './styles.js';
import Mockup from '/images/mockup.svg';
import Title from '../title';
import Text from '../text';

const About = ({id}) => {
  return (
    <Container id={id}>
      <div>
        <img src={Mockup} alt="Imagem"/>
      </div>
      <div>
        <Align>
        <Title title="O que é o Bonfire?" size="48px" width="80%"/>
        <Text text="O Bonfire é uma empresa facilitadora digital, responsável por criar soluções tecnológicas que não apenas simplificam, mas também transformam a experiência das pessoas no mundo online. Somos impulsionados pela inovação, comprometidos em oferecer segurança, comunicação eficaz, qualidade e oportunidades de aprendizado, enquanto promovemos a acessibilidade e a usabilidade em cada produto desenvolvido. " width="80%"/>
          </Align>
      </div>
    </Container>
  );
}

export default About;
