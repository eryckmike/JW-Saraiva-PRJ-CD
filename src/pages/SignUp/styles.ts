import styled from 'styled-components';

export const SignUpConteiner = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #7A8A96, #DE562C);
  padding: 20px;

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
