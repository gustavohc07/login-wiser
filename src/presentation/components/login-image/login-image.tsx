import React from 'react'
import { Background, ImageSection } from './login-image-styles'
import Image from 'next/image'

const LoginImage: React.FC = () => {
  return (
    <ImageSection>
      <Background />
      <Image
        src="/login-image.png"
        alt="Imagem de Login"
        layout="fill"
      />
    </ImageSection>
  )
}

export default LoginImage
