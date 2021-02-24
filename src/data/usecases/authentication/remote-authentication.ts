import { HttpPostClient } from '@src/data/protocols/http/http-post-client'
import {Authentication, AuthenticationParams} from '@src/domain/usecases/authentication'
import { HttpStatusCode } from '@src/data/protocols/http/http-response'
import { InvalidCredentialsError } from '@src/domain/errors/invalid-credentials-error'
import { UnexpectedError } from '@src/domain/errors/unexpected-error'
import { AccountModel } from '@src/domain/models/account-model'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}
