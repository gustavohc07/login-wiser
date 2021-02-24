import { FieldValidation } from '@src/validation/protocols'
import { InvalidFieldError } from '@src/validation/errors'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {}

  validate (value: string): Error {
    return new InvalidFieldError()
  }
}