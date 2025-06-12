import styled from "styled-components";

export const PainelContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background: #0d1117;
  color: #E8EBED;
  min-height: 100vh;
  padding: 60px 40px;
  width: 100%;
  box-sizing: border-box;
`;

export const PainelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const PainelTitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: #E8EBED;
`;

export const BotaoNovaViagem = styled.button`
  padding: 0.75rem 1.25rem;
  border: none;
  background-color: #DE562C;
  color: white;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.2s;
  &:hover {
    background-color: #bf4523;
  }
`;

export const ListaViagens = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

export const CartaoViagem = styled.div`
  background: #161b22;
  border-left: 4px solid #f97316;
  border-radius: 10px;
  padding: 16px 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  gap: 12px;
  &:hover {
    background: #1c222a;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
  }
`;

export const LinhaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: flex-start;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Coluna = styled.div`
  flex: 1 1 200px;
  min-width: 200px;
  max-width: 300px;
  span {
    display: block;
    font-size: 13px;
    color: #7A8A96;
    margin-bottom: 4px;
    font-weight: 500;
  }
  font-size: 15.5px;
  color: #E8EBED;
  font-weight: 500;
`;

/* Modal */
export const CampoForm = styled.div`
  display: flex;
  flex-direction: column;
  & > label {
    margin-bottom: 0.25rem;
    font-weight: 600;
    font-size: 0.9rem;
  }
  & > input,
  & > select {
    padding: 0.5rem;
    border: 1px solid #30363d;
    border-radius: 0.375rem;
    background: #0d1117;
    color: #E8EBED;
    font-size: 0.9rem;
  }
`;

export const AcoesModal = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1rem;

  & > button {
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
  }
  & > button[type="button"] {
    background-color: #30363d;
    color: #E8EBED;
  }
  & > button[type="submit"] {
    background-color: #4caf50;
    color: white;
  }
`;
