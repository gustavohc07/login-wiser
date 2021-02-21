import React from 'react'
import Image from 'next/image'
import {
  LoginWrapper,
  ImageSection,
  Background,
  FormSection,
  FormWrapper,
  WelcomeTitle,
  SubTitle,
  InputWrap,
  InputLabel,
  Input,
  Status,
  SubmitButton,
  ForgotPassword,
  Link
} from './login-styles'

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
