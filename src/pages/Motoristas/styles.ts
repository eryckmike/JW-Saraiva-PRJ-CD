import styled from 'styled-components';

export const MotoristasContainer = styled.div`
  display: flex;
  font-family: 'Poppins', sans-serif;
  background: #0d1117;
  color: #E8EBED;
  min-height: 100vh;
  width: 100%;
`;

export const PainelMotoristas = styled.div`
  flex: 1;
  padding: 40px;
`;

/* wrapper para pesquisa + botão */
export const MotoristasHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  button {
    background: #DE562C;
    border: none;
    color: white;
    font-size: 1rem;
    width: 2rem;
    height: 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background 0.2s;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    background: #bf4523;
  }
`;

export const BarraPesquisa = styled.div`
  flex: 1;

  input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #30363d;
    border-radius: 8px;
    background: #0d1117;
    color: #E8EBED;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;

    &::placeholder {
      color: #7A8A96;
    }

    &:focus {
      border-color: #DE562C;
      box-shadow: 0 0 0 3px rgba(222, 86, 44, 0.3);
    }
  }
`;

export const GradeMotoristas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const CartaoMotorista = styled.div`
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.3s, border-color 0.3s;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    border-color: #DE562C;
  }

  p {
    margin: 0 0 8px 0;
    font-size: 14px;
    color: #E8EBED;

    &:first-child {
      font-weight: bold;
      font-size: 16px;
      color: #DE562C;
    }
  }
`;

export const AcoesIcones = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  gap: 10px;

  svg {
    cursor: pointer;
    transition: transform 0.2s ease, opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }
`;
