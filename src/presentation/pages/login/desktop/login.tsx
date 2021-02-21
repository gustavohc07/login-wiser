import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Background = styled.div`
  background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
  transform: rotate(-180deg);
  width: 100%;
  position: relative;
  height: 100%;
  z-index: 1
`

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #FAF5FF;
  font-family: Montserrat ,sans-serif
`

const ImageSection = styled.div`
  width: 60%;
  height: 100vh;
  position: relative;
`

const FormSection = styled.div`
  width: 40%;
  margin: 136px 0 160px 112px;
`

const WelcomeTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 8px;
  color: #383E71;
`

const SubTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  margin-top: 8px;
  line-height: 20px;
  color: #989FDB;
  margin-bottom: 32px;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`

const InputWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 16px;
`

const InputLabel = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;

  display: flex;
  align-items: center;
  margin-bottom: 8px;
  margin-left: 8px;

  text-transform: uppercase;
  color: #383E71;
`

const Input = styled.input`
  display: flex;
  line-height: 48px;
  border: 1px solid #989FDB;
  box-sizing: border-box;
  border-radius: 8px;
  padding-left: 17px;
  background-color: #FAF5FF;
  &:focus {
    outline: none;
    border: 1px solid #383E71;
    border-radius: 8px;
  }
`

const Status = styled.span`
  position: absolute;
  right: 16px;
  top: 35px;
  color: #FF377F;
`

const SubmitButton = styled.button`
  margin-top: 24px;
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px #CF99DB;
  border-radius: 8px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 48px;
  border: 0;
  /* identical to box height, or 125% */
  color: #FFFFFF;

  &:focus {
    outline: #383E71;
    border-radius: 8px;
  }
  
  &:hover {
    background: #9D25B0
  }
`

const ForgotPassword = styled.div`
  margin-top: 32px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  text-align: center;

  color: #989FDB;
`

const Link = styled.a`

`

const Login: React.FC = () => {
  return (
    <LoginWrapper>
      <ImageSection>
        <Background />
        <Image
          src="/login-image.png"
          alt="Imagem de Login"
          layout="fill"
        />
      </ImageSection>
      <FormSection>
        <FormWrapper>
          <WelcomeTitle>
            Olá, seja bem-vindo!
          </WelcomeTitle>
          <SubTitle>
            Para acessar a plataforma, faça seu login.
          </SubTitle>
          <InputWrap>
            <InputLabel>E-mail</InputLabel>
            <Input></Input>
            <Status>X</Status>
          </InputWrap>
          <InputWrap>
            <InputLabel>Senha</InputLabel>
            <Input></Input>
            <Status>X</Status>
          </InputWrap>
          <SubmitButton>Entrar</SubmitButton>
          <ForgotPassword>
            Esqueceu seu login ou senha? Clique <Link href="#">aqui</Link>
          </ForgotPassword>
        </FormWrapper>
      </FormSection>
    </LoginWrapper>
  )
}

export default Login
