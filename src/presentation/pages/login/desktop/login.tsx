import React, { useState, useEffect } from 'react'
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
import Context from '@src/presentation/context/form/form-context'
import { Validation } from '@src/presentation/protocols/validation'

type StateProps = {
  errorMessage: string
  emailError: string
  passwordError: string
  email: string
  password: string
}

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState<StateProps>({
    errorMessage: '',
    emailError: '',
    passwordError: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email)
    })
    validation.validate('email', state.email)
  }, [state.email])

  useEffect(() => {
    setState({
      ...state,
      passwordError: validation.validate('password', state.password)
    })
    validation.validate('password', state.password)
  }, [state.password])

  return (
    <LoginWrapper>
      <LoginImage />
      <Context.Provider value={{ state, setState }}>
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
