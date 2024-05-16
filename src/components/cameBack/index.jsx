import React from "react"
import { useNavigate } from "react-router-dom"

import { MdArrowBack } from 'react-icons/md'

import { Container} from './styles.js'

const CameBack = () => {
  const navigate = useNavigate()

  function backToHome(){
    navigate('/')
  }
  
  
  return(
    <Container onClick={backToHome}>
      <MdArrowBack size={47} color="#eeeee" />
    </Container>
  )
  
}

export default CameBack