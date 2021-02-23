import React, { useState } from 'react'
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
import { LoginImage, LoginInput, FormStatus } from '@src/presentation/components'
import Context from '@src/presentation/context/form/form-context'

type StateProps = {
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    errorMessage: ''
  })

  return (
    <LoginWrapper>
      <LoginImage />
      <Context.Provider value={state}>
        <FormSection>
          <FormWrapper>
            <WelcomeTitle>
              Olá, seja bem-vindo!
            </WelcomeTitle>
            <SubTitle>
              Para acessar a plataforma, faça seu login.
            </SubTitle>
            <LoginInput id='email_field' type="email" name='email' placeholder='Digite seu e-mail' labelName='E-mail' htmlFor='email_field'/>
            <FormStatus />
            <LoginInput id='password_field' type="password" name='password' placeholder='*******' labelName='Senha' htmlFor='password_field'/>
            <SubmitButton type='submit'>Entrar</SubmitButton>
            <ForgotPassword>
              Esqueceu seu login ou senha? Clique <Link href="#">aqui</Link>
            </ForgotPassword>
          </FormWrapper>
        </FormSection>
      </Context.Provider>
    </LoginWrapper>
  )
}

export default Login
