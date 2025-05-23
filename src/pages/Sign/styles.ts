import styled, { Styled } from "styled-components";

export const SignConteiner = styled.div`
display: flex;
align-items: center;
padding: 8rem 2rem;
gap: 5rem;
`

export const LoginConteiner = styled.div`

background-color: #E8EBED;
width: 520px;
height: 600px;
border: 5px solid #788793;
border-radius: 5px;
padding-top: 8rem;
padding-left: 2rem;
padding-right: 2rem;
`

export const FormGroup = styled.div`
margin-bottom:24px;
`

export const UserInfoLabel = styled.label`
display: block;
margin-bottom: 8px;
font-size: 16px;
color: #333;
`

export const Input = styled.input`
width: 100%;
  height: 48px;
  padding: 12px 16px;
  background-color: #FFF5F0;
  border: 3px solid #E68A6D;
  border-radius: 12px;
  font-size: 16px;
  box-sizing: border-box;

  &::placeholder {
    color: #AAA;
  }


`

export const TelaLogin = styled.div`
img{
    padding: 2rem;
}
`
