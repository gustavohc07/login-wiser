import {HttpPostClient} from '@src/data/protocols/http/http-post-client'
import {AuthenticationParams} from "@src/domain/usecases/authentication";
import {HttpStatusCode} from "@src/data/protocols/http/http-response";
import {InvalidCredentialsError} from "@src/domain/errors/invalid-credentials-error";

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: return Promise.resolve()
    }
  }
}
