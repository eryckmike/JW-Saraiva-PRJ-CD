import styled from "styled-components";

export const PainelContainer = styled.div`
  background-color: #E8EBED;
  padding: 2rem;
  border-radius: 12px;
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const PainelTitle = styled.h1`
  color: #1C1C1C;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ListaEntradasSaidas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ItemEntradaSaida = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

interface ColunaProps {
  flex?: string;
}

export const Coluna = styled.div<ColunaProps>`
  flex: ${({ flex }) => flex || "1"};
  color: #7A8A96;
  font-size: 0.95rem;

  &.status-patio {
    color: #DE562C;
    font-weight: bold;
  }

  &.status-saida {
    color: #1C1C1C;
    font-weight: bold;
  }
`;

export const Status = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #DE562C;
    display: inline-block;
  }

  &.status-saida::before {
    background-color: #1C1C1C;
  }
`;
