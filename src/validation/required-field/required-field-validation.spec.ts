import {RequiredFieldValidation} from "@src/validation/required-field/required-field-validation";
import {RequiredFieldError} from "@src/validation/errors/required-field-error";

describe('RequiredFieldValidation', () => {
  test('Should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })
})