import React, { useContext } from 'react'
import { Input, InputLabel, InputWrap, Status } from './input-styles'
import Context from '@src/presentation/context/form/form-context'
import { FormStatus } from '@src/presentation/components'

type Props = {
  labelName?: string
  id?: string
  type: string
  name: string
  placeholder?: string
  htmlFor?: string
}

const LoginInput: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]
  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <InputWrap role='input-wrapper'>
      <InputLabel {...props}> { props.labelName } </InputLabel>
      <Input {...props} data-testid={props.name} onChange={handleChange} />
      {getTitle() && <Status role={`input-error-${props.name}`}>X</Status>}
      <FormStatus title={getTitle()} name={props.name} />
    </InputWrap>
  )
}

export default LoginInput
