import React from 'react'
import { Container, Grid, TextArea, Value, TextContainer} from './styles.js'
import { MdOutlineLightbulb, MdCampaign, MdSchool, MdAccessAlarm, MdVerifiedUser, MdVerified } from 'react-icons/md'
import CardsComponents from '../cardsComponents'
import Title from '../title'
import Text from '../text'

const Products = ({id}) => {
  return (
    <Container id={id}>
      <TextContainer>
        <TextArea>
        <Title title="Nossos produtos e valores" size="48px" width="80%" />
        <Text text="Bonfire é a chama que acende a transformação na educação e na vida das pessoas. Somos uma empresa jovem, movida pela paixão por tecnologia e inovação, com um propósito claro: tornar o aprendizado acessível, simples e conectado ao mundo real.
        Criamos soluções digitais que aproximam pessoas, facilitam a comunicação e promovem o desenvolvimento — desde a educação financeira para crianças até ferramentas que preparam para os desafios do futuro. No Bonfire, acreditamos que tecnologia é mais do que código: é impacto, é inclusão, é oportunidade." width="80%" />
          </TextArea>
      </TextContainer>
      <Value>
      <Grid>
        <CardsComponents Icon={MdOutlineLightbulb} text="Inovação" />
        <CardsComponents Icon={MdCampaign} text="Assertiva" />
      </Grid>
      <Grid>
        <CardsComponents Icon={MdSchool} text="Conhecimento" />
        <CardsComponents Icon={MdAccessAlarm} text="Facilidade" />
      </Grid>
      <Grid>
        <CardsComponents Icon={MdVerifiedUser} text="Segurança" />
        <CardsComponents Icon={MdVerified} text="Qualidade" />
      </Grid>
      </Value>
    </Container>
  )
}

export default Products