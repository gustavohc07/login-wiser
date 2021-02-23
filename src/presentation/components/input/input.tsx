import React, { useContext } from 'react'
import { Input, InputLabel, InputWrap, Status } from './input-styles'
import Context from '@src/presentation/context/form/form-context'

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
  const handleChange = (event: React.FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <InputWrap role='input-wrapper'>
      <InputLabel {...props}> { props.labelName } </InputLabel>
      <Input {...props} data-testid={props.name} onChange={handleChange} />
      {state.errorMessage && <Status role='input-error'>X</Status>}
    </InputWrap>
  )
}

export default LoginInput
