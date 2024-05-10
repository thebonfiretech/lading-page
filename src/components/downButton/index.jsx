import React from 'react'

import {Container} from './styles.js'

import {MdOutlineArrowDownward} from 'react-icons/md'

const DownButton = ({onAction}) => {
  return(
    <>
      <Container onClick={() => onAction()}>
        Desça para saber mais
        <MdOutlineArrowDownward size={22}/>
      </Container>
    </>
  )
}

export default DownButton