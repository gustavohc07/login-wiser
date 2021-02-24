import { FieldValidation } from '@src/validation/protocols'
import { InvalidFieldError } from '@src/validation/errors'

export class EmailValidation implements FieldValidation {
  constructor (readonly field: string) {}
  validate (value: string): Error {
    return new InvalidFieldError()
  }
}
