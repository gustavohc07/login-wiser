import React from 'react'
import {render, RenderResult} from '@testing-library/react'
import Login from './login'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Login/>)
  return {
    sut
  }
}

describe('Login Component', () => {
  test('Should start with initial state', () => {
    const { sut } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    const errorHighlights = sut.queryAllByRole('input-error')
    expect(errorWrap.childElementCount).toBe(0)
    expect(errorHighlights).toEqual([])
  })
})
