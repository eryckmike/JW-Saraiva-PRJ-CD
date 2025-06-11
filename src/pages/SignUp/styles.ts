import styled from 'styled-components';

export const SignUpConteiner = styled.div`
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

  form {
    background: #E8EBED;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h1 {
    text-align: center;
    font-size: 2rem;
    color: #333;
    margin-bottom: 10px;
    font-family: sans-serif;
  }

  input {
    padding: 12px 15px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 1rem;
    background: #fff;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      border-color: #DE562C;
      box-shadow: 0 0 0 3px rgba(222, 86, 44, 0.2);
      outline: none;
    }
  }

  button {
    padding: 12px 15px;
    background: #DE562C;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #b94522; /* laranja queimado mais escuro no hover */
    }
  }
`;

export const SignUpContent = styled.div`
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
`;
