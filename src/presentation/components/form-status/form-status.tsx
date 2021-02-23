import React, { useContext } from 'react'
import { Span, ErrorWrap } from './form-status-style'
import Context from '@src/presentation/context/form/form-context'

const FormStatus: React.FC = () => {
  const { errorMessage } = useContext(Context)
  return (
    <ErrorWrap data-testid='error-wrap'>
      {errorMessage && <Span>{errorMessage}</Span> }
    </ErrorWrap>
  )
}

export default FormStatus
