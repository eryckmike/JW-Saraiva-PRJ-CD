import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const SignContent = styled.div`
  width: 100%;
  max-width: 400px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 480px;
`;

export const SignHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    color: #333;
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  color: #666;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #DE562C;
  }
`;

export const RememberMeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

export const RememberMeLabel = styled.label`
  color: #666;
  font-size: 0.9rem;
  cursor: pointer;
`;

export const ForgotPasswordLink = styled(Link)`
  color: #DE562C;
  text-decoration: none;
  font-size: 0.9rem;
  text-align: right;
  transition: color 0.2s;

  &:hover {
    color: #c44a25;
  }
`;

export const SubmitButton = styled.button`
  background-color: #DE562C;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c44a25;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const SignUpLink = styled.p`
  text-align: center;
  color: #666;
  font-size: 0.9rem;

  a {
    color: #DE562C;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
      color: #c44a25;
    }
  }
`;
