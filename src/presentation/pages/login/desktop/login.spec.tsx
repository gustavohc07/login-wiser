import React from 'react'
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'
import Login from './login'
import { ValidationSpy } from '@src/presentation/test'
import faker from 'faker'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = render(<Login validation={validationSpy}/>)
  return {
    sut,
    validationSpy
  }
}

describe('Login Component', () => {
  afterEach(cleanup)

  test('Should start with initial state', () => {
    const { sut } = makeSut()
    const emailErrorWrap = sut.getByTestId('error-wrap-email')
    const emailErrorHighlight = sut.queryByRole('input-error-email')
    const passwordErrorWrap = sut.getByTestId('error-wrap-password')
    const passwordErrorHighlight = sut.queryByRole('input-error-password')
    expect(emailErrorWrap.childElementCount).toBe(0)
    expect(emailErrorHighlight).toBe(null)
    expect(passwordErrorWrap.childElementCount).toBe(0)
    expect(passwordErrorHighlight).toBe(null)
  })

  test('Should call validation with correct email', () => {
    const { sut, validationSpy } = makeSut()
    const emailInput = sut.getByTestId('email')
    const email = faker.internet.email()
    fireEvent.input(emailInput, { target: { value: email } })
    expect(validationSpy.fieldName).toBe('email')
    expect(validationSpy.fieldValue).toBe(email)
  })

  test('Should call validation with correct password', () => {
    const { sut, validationSpy } = makeSut()
    const passwordInput = sut.getByTestId('password')
    const password = faker.internet.password()
    fireEvent.input(passwordInput, { target: { value: password } })
    expect(validationSpy.fieldName).toBe('password')
    expect(validationSpy.fieldValue).toBe(password)
  })

  test('Should show email error if validation fails', () => {
    const { sut, validationSpy } = makeSut()
    const errorMessage = faker.random.words()
    validationSpy.errorMessage = errorMessage
    const emailInput = sut.getByTestId('email')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    const emailStatus = sut.getByTestId('error-wrap-email')
    const emailHighlightError = sut.queryByRole('input-error-email')
    expect(emailStatus.title).toBe(errorMessage)
    expect(emailHighlightError.textContent).toBe('X')
  })
})
