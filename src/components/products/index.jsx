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
        <Text text="Somos uma empresa de tecnologia comprometida em simplificar a vida das pessoas através de soluções inovadoras em websites e aplicativos. Valorizamos a segurança, comunicação eficaz, qualidade e aprendizado contínuo sendo um de nosssos projetos voltado a educação finaceira para que desde criança possa ser aplicada com eficiência. Buscamos tornar a tecnologia acessível e fácil de usar, promovendo parcerias sólidas e excelência. Junte-se a nós para moldar o futuro da tecnologia de forma segura, eficiente e emocionante." width="80%" />
          </TextArea>
      </TextContainer>
      <Value>
      <Grid>
        <CardsComponents Icon={MdOutlineLightbulb} text="Inovação" />
        <CardsComponents Icon={MdCampaign} text="Comunicação assertiva" />
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