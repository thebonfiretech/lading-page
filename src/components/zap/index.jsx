import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'


const Zap = () => {
  return(
    <>
      <FloatingWhatsApp
        phoneNumber="+5531996403416"
        messageDelay="Gostaria de adquirir um serviço."
        accountName="Bonfire"
        avatar="../../public/images/logo.svg"
        chatMessage="Olá, como posso ajudar você?"
      />
    </>
  )
}

export default Zap 