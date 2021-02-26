import React, { useCallback, useEffect, useState } from 'react'
import { Background, ImageSection, ImageStyle } from './login-image-styles'

export const useMediaQuery = (width: number): boolean => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = (window.matchMedia(`(max-width: ${width}px)`)) as any
    media.addListener(updateTarget)

    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeListener(updateTarget)
  }, [])

  return targetReached
}

const LoginImage: React.FC = () => {
  const tablet = useMediaQuery(768)
  const mobile = useMediaQuery(420)

  const imageSrc = (): string => {
    if (mobile) {
      return '/login-image-mobile.png'
    } else if (tablet) {
      return '/login-image-tablet.png'
    } else {
      return '/login-image.png'
    }
  }

  return (
    <ImageSection>
      <Background />
      <ImageStyle
        src={imageSrc()}
        alt="Imagem de Login"
        layout="fill"
      />
    </ImageSection>
  )
}

export default LoginImage
