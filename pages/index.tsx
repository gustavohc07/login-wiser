import React from 'react'
import { Login } from '@src/presentation/pages/login/'
import { makeRemoteAuthentication } from '@src/main/factories/usecases/authentication/remote-authenticfation-factory'
import { makeLoginValidation } from '@src/main/factories/pages/login/login-validation-factory'

const LoginPage: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
    />
  )
}

export default LoginPage
