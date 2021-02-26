import styled from 'styled-components'

export const ErrorWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 16px;
`

export const Span = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 48px;
  color: #FF377F;
  @media (max-width: 375px) {
      line-height: 24px;
  };
  
  @media (max-width: 420px) {
      line-height: 24px;
  };
`
