import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #FAF5FF;
  font-family: Montserrat ,sans-serif;

  @media (max-width: 420px) {
    background-color: #130525;
  }
  
  @media (max-width: 375px) {
    background-color: #130525;
  }
`

export const FormSection = styled.form`
  width: 30%;
  margin: 136px 0 160px 112px;
  
  @media (max-width: 768px) {
    margin: 0;
    width: 45%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-self: center;
    align-items: center;
  }
  
  @media (max-width: 420px) {
    border-radius: 8px;
    margin: 0 32px;
    position: relative;
    z-index: 3;
    background-color: white;
    display: flex;
    height: 380px;
  }
  
  @media (max-width: 375px) {
    border-radius: 8px;
    margin: 0 32px;
    position: relative;
    z-index: 3;
    background-color: white;
    display: flex;
    height: 380px;
  }
`
export const WelcomeTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 8px;
  color: #383E71;

  @media (max-width: 420px) {
    align-self: center;
    margin-top: 24px;
    width: 160px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
  }
  
  @media (max-width: 375px) {
    align-self: center;
    margin-top: 24px;
    width: 160px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
  }
`

export const SubTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  margin-top: 8px;
  line-height: 20px;
  color: #989FDB;
  margin-bottom: 32px;

  @media (max-width: 420px) {
    font-style: normal;
    width: 255px;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 8px;
  }
  
  @media (max-width: 375px) {
    font-style: normal;
    width: 255px;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    margin-bottom: 8px;
  }

`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;

  @media (max-width: 768px) {
    width: 280px
  }
  
  @media (max-width: 420px) {
    width: 250px
  }
  
  @media (max-width: 375px) {
    width: 250px
  }
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

export const SubmitButton = styled.button`
  margin-top: 24px;
  background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
  box-shadow: 0px 10px 25px #CF99DB;
  border-radius: 8px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 48px;
  border: 0;
  /* identical to box height, or 125% */
  color: #FFFFFF;
  cursor: pointer;

  &:focus {
    outline: #383E71;
    border-radius: 8px;
  }
  
  &:hover {
    background: #9D25B0
  }

  @media (max-width: 420px) {
    box-shadow: none;
    width: 150px;
    top: 332px;
    left: 100px;
    position: absolute;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 48px;

    text-align: center;

    color: #FFFFFF;
  }
  
  @media (max-width: 375px) {
    box-shadow: none;
    width: 150px;
    top: 332px;
    left: 76px;
    position: absolute;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 48px;
    
    text-align: center;

    color: #FFFFFF;
  }
`

export const ForgotPassword = styled.div`
  margin-top: 32px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;

  color: #989FDB;

  @media (max-width: 420px) {
    position: absolute;
    width: 212px;
    z-index: 10000;
    left: 70px;
    top: 400px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
  }

  @media (max-width: 375px) {
    position: absolute;
    width: 212px;
    z-index: 10000;
    left: 48px;
    top: 400px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
  }

`

export const Link = styled.a`
  @media (max-width: 420px) {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
  }
  
  @media (max-width: 375px) {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
  }
`
