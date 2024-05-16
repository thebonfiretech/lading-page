import React from 'react'

import {Container} from './styles.js'

import {MdOutlineArrowDownward} from 'react-icons/md'

const DownButton = () => {

  const Scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }

  return(
    <>
      <Container onClick={Scroll}>
        Desça para saber mais
        <MdOutlineArrowDownward size={22}/>
      </Container>
    </>
  )
}

export default DownButton