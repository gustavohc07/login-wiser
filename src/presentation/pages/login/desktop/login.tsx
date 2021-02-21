import React from 'react'
import {
  LoginWrapper,
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
import { LoginImage } from '@src/presentation/components'

const Login: React.FC = () => {
  return (
    <LoginWrapper>
      <LoginImage />
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
