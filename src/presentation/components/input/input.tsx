import React from 'react'
import { Input, InputLabel, InputWrap, Status } from './input-styles'

type Props = {
  labelName?: string
  id?: string
  type: string
  name: string
  placeholder?: string
  htmlFor?: string
}

// React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>

const LoginInput: React.FC<Props> = (props: Props) => {
  return (
    <InputWrap>
      <InputLabel {...props}> { props.labelName } </InputLabel>
      <Input {...props} />
      <Status>X</Status>
    </InputWrap>
  )
}

export default LoginInput
