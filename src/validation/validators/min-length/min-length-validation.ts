import { FieldValidation } from '@src/validation/protocols'
import { InvalidFieldError, InvalidLengthError } from '@src/validation/errors'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {}

  validate (value: string): Error {
    switch (this.field) {
      case 'password':
        return (value.length >= this.minLength) ? null : new InvalidLengthError()
      default: {
        return (value.length >= this.minLength) ? null : new InvalidFieldError()
      }
    }
  }
}
