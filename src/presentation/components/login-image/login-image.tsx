import React from 'react'
import { Background, ImageSection, ImageStyle } from './login-image-styles'

const LoginImage: React.FC = () => {
  // const setImageSource = (width: number): string => {
  //   switch (width) {
  //     case 768:
  //       return '/login-image-table.png'
  //     case 376:
  //       return '/login-image-mobile.png'
  //     default:
  //       return '/login-image.png'
  //   }
  // }
  return (
    <ImageSection>
      <Background />
      <ImageStyle
        src='/login-image-mobile.png'
        alt="Imagem de Login"
        layout="fill"
      />
    </ImageSection>
  )
}

export default LoginImage
