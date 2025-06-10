import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Content = styled.div`
  background-color: #161b22;
  padding: 30px;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  color: #E8EBED;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  position: relative;

  h2 {
    color: #E8EBED;
    margin-bottom: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    display: block;
    color: #E8EBED;
    margin-bottom: 8px;
    font-size: 14px;
  }

  input {
    width: 100%;
    margin-bottom: 1.5rem;
    padding: 10px;
    border-radius: 6px;
    background: #0d1117;
    color: #E8EBED;
    border: 1px solid #30363d;
    font-size: 15px;
    font-family: 'Poppins', sans-serif;
  }

  button {
    padding: 8px 14px;
    border-radius: 6px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    border: none;
    cursor: pointer;
    margin-right: 12px;
  }

  button[type="submit"] {
    background-color: #f97316;
    color: #fff;
  }

  button[type="button"] {
    background-color: #30363d;
    color: #fff;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: transparent;
  border: none;
  color: #E8EBED;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    opacity: 0.8;
  }
`;
