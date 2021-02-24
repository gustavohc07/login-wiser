import {AuthenticationParams} from "@src/domain/usecases/authentication";
import faker from 'faker'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})