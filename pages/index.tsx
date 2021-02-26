import React from 'react'
import { DesktopLogin } from '@src/presentation/pages/login/'
import { AxiosHttpClient } from '@src/infra/http/axios-http-client/axios-http-client'
import { RemoteAuthentication } from '@src/data/usecases/authentication/remote-authentication'
import { ValidationComposite } from '@src/validation/validators/validation-composite/validation-composite'
import { ValidationBuilder } from '@src/validation/builder/validation-builder'

const LoginPage: React.FC = () => {
  const url = 'http://fordeves.herokuapp.com/api/login'
  const axiosHttpClient = new AxiosHttpClient()
  const remoteAuthentication = new RemoteAuthentication(url, axiosHttpClient)
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').build()
  ])
  return (
    <DesktopLogin
      authentication={remoteAuthentication}
      validation={validationComposite}
    />
  )
}

export default LoginPage
