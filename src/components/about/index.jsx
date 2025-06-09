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
        <Text text="
        O Bonfire oferece soluções tecnológicas inovadoras que aproximam estudantes, professores e escolas, facilitando a comunicação e promovendo o aprendizado real. Nossos produtos abordam temas essenciais como educação financeira e pensamento computacional, preparando as novas gerações para os desafios do mundo moderno. 
        Acreditamos que a educação só alcança todo o seu potencial quando acompanha as transformações
        do mundo. E, nesse mundo em constante mudança, a tecnologia não é mais uma opção – é o caminho para o futuro" width="80%"/>
          </Align>
      </div>
    </Container>
  );
}

export default About;
