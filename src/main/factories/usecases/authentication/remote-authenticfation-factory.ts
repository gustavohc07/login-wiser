import { Authentication } from '@src/domain/usecases'
import { RemoteAuthentication } from '@src/data/usecases/authentication/remote-authentication'
import { makeAxiosHttpClient } from '@src/main/factories/http/axios-http-client-factory'
import { makeApiUrl } from '@src/main/factories/http/api-url-factory'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl(), makeAxiosHttpClient())
}
