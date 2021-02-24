import { Authentication, AuthenticationParams } from '@src/domain/usecases'
import { mockAccountModel } from '@src/domain/test'
import { AccountModel } from '@src/domain/models'

export class AuthenticationSpy implements Authentication {
  account = mockAccountModel()
  params: AuthenticationParams

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    this.params = params
    return Promise.resolve(this.account)
  }
}
