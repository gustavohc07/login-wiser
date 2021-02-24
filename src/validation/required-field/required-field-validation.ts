import { FieldValidation } from '@src/validation/protocols'
import { RequiredFieldError } from '@src/validation/errors'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (value: string): Error {
    return value ? null : new RequiredFieldError()
  }
}
