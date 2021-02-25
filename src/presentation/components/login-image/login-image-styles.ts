import styled from 'styled-components'
import Image from 'next/image'

export const Background = styled.div`
  background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
  transform: rotate(-180deg);
  width: 100%;
  position: relative;
  height: 100%;
  z-index: 2
`

export const ImageSection = styled.div`
  width: 60%;
  height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    width: 327px;
  }

  @media (max-width: 375px) {
    position: absolute;
    width: 100%;
    height: 60%;
    z-index: 1;
  }
`

type ImageProps = {
  layout: string
}

export const ImageStyle = styled(Image)<ImageProps>`
  @media (min-width: 768px) {
  }
`
