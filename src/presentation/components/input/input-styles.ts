import styled from 'styled-components'

export const InputWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 16px;
`

export const InputLabel = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;

  display: flex;
  align-items: center;
  margin-bottom: 8px;
  margin-left: 8px;

  text-transform: uppercase;
  color: #383E71;
`

export const Input = styled.input`
  display: flex;
  line-height: 48px;
  border: 1px solid #989FDB;
  box-sizing: border-box;
  border-radius: 8px;
  padding-left: 17px;
  background-color: #FAF5FF;
  &:focus {
    outline: none;
    border: 1px solid #383E71;
    border-radius: 8px;
  }
`

export const Status = styled.span`
  position: absolute;
  right: 16px;
  top: 35px;
  color: #FF377F;
`
