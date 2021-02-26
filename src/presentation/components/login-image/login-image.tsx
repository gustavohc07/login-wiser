import React from 'react'
import { Background, ImageSection, ImageStyle } from './login-image-styles'

const LoginImage: React.FC = () => {
  return (
    <ImageSection>
      <Background />
      <ImageStyle
        src='/login-image.png'
        alt="Imagem de Login"
        layout="fill"
      />
    </ImageSection>
  )
}

export default LoginImage
