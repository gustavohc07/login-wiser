import React from 'react'
import { Span, ErrorWrap } from './form-status-style'

type Props = {
  name: string
  title: string
}

const FormStatus: React.FC<Props> = (props: Props) => {
  return (
    <ErrorWrap title={props.title} data-testid={`error-wrap-${props.name}`}>
      {props.title && <Span>{props.title}</Span> }
    </ErrorWrap>
  )
}

export default FormStatus
