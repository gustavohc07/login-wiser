import React from 'react'
import faker from 'faker'
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'
import Login from './login'
import { ValidationSpy, AuthenticationSpy } from '@src/presentation/test'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
  authenticationSpy: AuthenticationSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const authenticationSpy = new AuthenticationSpy()
  const sut = render(<Login validation={validationSpy} authentication={authenticationSpy}/>)
  return {
    sut,
    validationSpy,
    authenticationSpy
  }
}

const simulateValidSubmit = (sut: RenderResult, email = faker.internet.email(), password = faker.internet.password()): void => {
  populateEmailField(sut, email)
  populatePasswordField(sut, password)
  const submitButton = sut.getByTestId('submit') as HTMLButtonElement
  fireEvent.click(submitButton)
}

const populateEmailField = (sut: RenderResult, email = faker.internet.email()): void => {
  const emailInput = sut.getByTestId('email')
  fireEvent.input(emailInput, { target: { value: email } })
}

const populatePasswordField = (sut: RenderResult, password = faker.internet.password()): void => {
  const passwordInput = sut.getByTestId('password')
  fireEvent.input(passwordInput, { target: { value: password } })
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
    const email = faker.internet.email()
    populateEmailField(sut, email)
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
    populateEmailField(sut)
    const emailStatus = sut.getByTestId('error-wrap-email')
    const emailHighlightError = sut.queryByRole('input-error-email')
    expect(emailStatus.title).toBe(errorMessage)
    expect(emailHighlightError.textContent).toBe('X')
  })

  test('Should show password error if validation fails', () => {
    const { sut, validationSpy } = makeSut()
    const errorMessage = faker.random.words()
    validationSpy.errorMessage = errorMessage
    populatePasswordField(sut)
    const passwordStatus = sut.getByTestId('error-wrap-password')
    const passwordHighlightError = sut.queryByRole('input-error-password')
    expect(passwordStatus.title).toBe(errorMessage)
    expect(passwordHighlightError.textContent).toBe('X')
  })

  test('Should not show email error if validation succeeds', () => {
    const { sut } = makeSut()
    populateEmailField(sut)
    const emailStatus = sut.getByTestId('error-wrap-email')
    const emailHighlightError = sut.queryByRole('input-error-email')
    expect(emailStatus.title).toBe('')
    expect(emailHighlightError).toBe(null)
  })

  test('Should not show password error if validation succeeds', () => {
    const { sut } = makeSut()
    populatePasswordField(sut)
    const passwordStatus = sut.getByTestId('error-wrap-password')
    const passwordHighlightError = sut.queryByRole('input-error-password')
    expect(passwordStatus.title).toBe('')
    expect(passwordHighlightError).toBe(null)
  })

  test('Should call Authentication with correct values', async () => {
    const { sut, authenticationSpy } = makeSut()
    const email = faker.internet.email()
    const password = faker.internet.password()
    simulateValidSubmit(sut, email, password)
    expect(authenticationSpy.params).toEqual({
      email,
      password
    })
  })

  test('Should call Authentication only once', async () => {
    const { sut, authenticationSpy } = makeSut()
    simulateValidSubmit(sut)
    simulateValidSubmit(sut)
    expect(authenticationSpy.callsCount).toBe(1)
  })

  test('Should not call Authentication if form is invalid', async () => {
    const { sut, authenticationSpy, validationSpy } = makeSut()
    validationSpy.errorMessage = faker.random.words()
    populatePasswordField(sut)
    fireEvent.submit(sut.getByTestId('form'))
    expect(authenticationSpy.callsCount).toBe(0)
  })

  // test('Should emit a success alert if form is valid', async () => {
  //   jest.spyOn(window, 'alert').mockImplementation(() => {})
  //   const { sut } = makeSut()
  //   const emailInput = sut.getByTestId('email')
  //   const passwordInput = sut.getByTestId('password')
  //   const submitButton = sut.getByTestId('submit') as HTMLButtonElement
  //   fireEvent.input(passwordInput, { target: { value: faker.internet.email() } })
  //   fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
  //   fireEvent.click(submitButton)
  //   expect(window.alert).toBeCalledTimes(1)
  // })
})
