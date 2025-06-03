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

export const ListaAbastecimentos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CartaoAbastecimento = styled.div`
  background: #161b22;
  border-left: 4px solid #f97316;
  border-radius: 10px;
  padding: 24px 28px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  gap: 18px;

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
  }

  font-size: 15.5px;
  color: #E8EBED;
  font-weight: 500;
`;
