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
  const { errorMessage } = useContext(Context)
  return (
    <InputWrap role='input-wrapper'>
      <InputLabel {...props}> { props.labelName } </InputLabel>
      <Input {...props} />
      {errorMessage && <Status role='input-error'>X</Status>}
    </InputWrap>
  )
}

export default LoginInput
