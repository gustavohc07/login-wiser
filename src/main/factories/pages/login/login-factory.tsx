import React from 'react'
import { DesktopLogin } from '@src/presentation/pages/login'
import { RemoteAuthentication } from '@src/data/usecases/authentication/remote-authentication'
import { AxiosHttpClient } from '@src/infra/http/axios-http-client/axios-http-client'
import { ValidationComposite } from '@src/validation/validators/validation-composite/validation-composite'
import { ValidationBuilder } from '@src/validation/builder/validation-builder'

export const makeLogin: React.FC = () => {
  const url = 'http://fordeves.herokuapp.com/api/login'
  const axiosHttpClient = new AxiosHttpClient()
  const remoteAuthentication = new RemoteAuthentication(url, axiosHttpClient)
  const validationComposite = ValidationComposite.build({
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()
  })
  return (
    <DesktopLogin
      authentication={remoteAuthentication}
      validation={validationComposite}
    />
  )
}
