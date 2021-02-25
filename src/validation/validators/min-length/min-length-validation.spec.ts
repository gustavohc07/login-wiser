import { InvalidFieldError, InvalidLengthError } from '@src/validation/errors'
import { MinLengthValidation } from './min-length-validation'

import faker from 'faker'

const makeSut = (field = faker.database.column()): MinLengthValidation => new MinLengthValidation(field, 5)

describe('MinLengthValidation', () => {
  test('Should return error if value is invalid and not password', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(4))
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return length error if value is invalid and field is password', () => {
    const sut = makeSut('password')
    const error = sut.validate(faker.random.alphaNumeric(4))
    expect(error).toEqual(new InvalidLengthError())
  })

  test('Should return falsy if value is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(5))
    expect(error).toBeFalsy()
  })
})
