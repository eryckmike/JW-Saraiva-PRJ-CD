import styled from "styled-components";

export const VeiculosContainer = styled.div`
  display: flex;
  font-family: 'Poppins', sans-serif;
  background: #0d1117;
  color: #E8EBED;
  min-height: 100vh;
`;

export const BarraLateral = styled.div`
  width: 250px;
  background: #161b22;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 20px;
      cursor: pointer;
      font-weight: 600;
      color: #7A8A96;
      font-size: 16px;
      transition: color 0.3s, transform 0.3s;

      &:hover {
        color: #DE562C;
        transform: translateX(5px);
      }
    }
  }
`;

export const PainelVeiculos = styled.div`
  flex: 1;
  padding: 60px 60px 40px; /* Espaço superior e lateral esquerdo maior */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinhamento à esquerda */

  h2 {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 32px;
  }
`;

export const FormularioCadastro = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  width: 100%;
`;

export const CampoInput = styled.input`
  width: 100%;
  padding: 12px;
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
`;

export const BotaoCadastro = styled.button`
  background: #DE562C;
  color: #E8EBED;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #bf4523;
  }
`;
