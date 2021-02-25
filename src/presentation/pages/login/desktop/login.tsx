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
import { Authentication } from '@src/domain/usecases'

type StateProps = {
  isSubmitting: boolean
  errorMessage: string
  emailError: string
  passwordError: string
  email: string
  password: string
}

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
  const [state, setState] = useState<StateProps>({
    isSubmitting: false,
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
  }, [state.email, state.isSubmitting])

  useEffect(() => {
    setState({
      ...state,
      passwordError: validation.validate('password', state.password)
    })
    validation.validate('password', state.password)
  }, [state.password, state.isSubmitting])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isSubmitting || state.emailError || state.passwordError) {
        setState({
          ...state,
          passwordError: validation.validate('password', state.password),
          emailError: validation.validate('email', state.email)
        })
        return
      }
      setState({ ...state, isSubmitting: true })
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })
      localStorage.setItem('accessToken', account.accessToken)
      alert('Login efetuado com sucesso')
    } catch (error) {
      setState({
        ...state,
        isSubmitting: false,
        errorMessage: error.message
      })
      alert(state.errorMessage)
    }
  }

  return (
    <LoginWrapper>
      <LoginImage />
      <Context.Provider value={{ state, setState }}>
        <FormSection data-testid='form' onSubmit={handleSubmit}>
          <FormWrapper>
            <WelcomeTitle>
              Olá, seja bem-vindo!
            </WelcomeTitle>
            <SubTitle>
              Para acessar a plataforma, faça seu login.
            </SubTitle>
            <LoginInput id='email_field' type="email" name='email' placeholder='Digite seu e-mail' labelName='E-mail' htmlFor='email_field'/>
            <LoginInput id='password_field' type="password" name='password' placeholder='*******' labelName='Senha' htmlFor='password_field'/>
            <SubmitButton data-testid='submit' type='submit'>Entrar</SubmitButton>
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
