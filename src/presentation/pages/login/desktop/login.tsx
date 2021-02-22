import React from 'react'
import {
  LoginWrapper,
  FormSection,
  FormWrapper,
  WelcomeTitle,
  SubTitle,
  SubmitButton,
  ForgotPassword,
  Link
} from './login-styles'
import { LoginImage, LoginInput } from '@src/presentation/components'

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
          <LoginInput id='email_field' type="email" name='email' placeholder='Digite seu e-mail' labelName='E-mail' htmlFor='email_field'/>
          <LoginInput id='password_field' type="password" name='password' placeholder='*******' labelName='Senha' htmlFor='password_field'/>
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
