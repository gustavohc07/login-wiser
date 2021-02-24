import { AuthenticationParams } from '@src/domain/usecases/authentication'
import faker from 'faker'
import {AccountModel} from "@src/domain/models/account-model";

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid()
})
