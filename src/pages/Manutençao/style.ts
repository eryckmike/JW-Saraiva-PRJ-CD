import styled from "styled-components";

interface ColunaProps {
  width?: string;
}

export const PainelContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background: #0d1117;
  color: #E8EBED;
  min-height: 100vh;
  padding: 60px 40px;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
`;

export const PainelTitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 32px;
  color: #E8EBED;
`;

export const ListaManutencoes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

export const CartaoManutencao = styled.div`
  background: #161b22;
  border-radius: 10px;
  padding: 16px 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
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

export const Coluna = styled.div<ColunaProps>`
  width: ${({ width }) => width || "200px"};

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

export const Aviso = styled.div`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  background-color: #f97316;
  font-family: 'Poppins', sans-serif;

  input {
    background: transparent;
    border: none;
    color: #ffffff !important;
    font-weight: 600;
    font-size: 14px;
    width: 100%;
    outline: none;

    &::placeholder {
      color: #ffedd5;
    }
  }
`;
