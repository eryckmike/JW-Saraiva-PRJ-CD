import styled from "styled-components";

interface ColunaProps {
  flex?: string;
}

interface TipoMovimentacaoProps {
  tipo: "Entrada" | "Saída";
}

export const PainelContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  background: #0d1117;
  color: #E8EBED;
  min-height: 100vh;
  padding: 60px 40px;
  width: 100%;
`;

export const PainelTitle = styled.h2`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 32px;
`;

export const ListaEntradasSaidas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ItemEntradaSaida = styled.div<{ header?: boolean }>`
  display: flex;
  background: ${({ header }) => (header ? "transparent" : "#161B22")};
  padding: 16px;
  border-radius: 8px;
  border: ${({ header }) => (header ? "none" : "1px solid #30363d")};
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Coluna = styled.div<ColunaProps>`
  flex: ${({ flex }) => flex || "1"};
  color: #E8EBED;
  font-size: 15px;

  strong {
    color: #7A8A96;
  }
`;

export const TipoMovimentacao = styled.span<TipoMovimentacaoProps>`
  color: ${({ tipo }) => (tipo === "Entrada" ? "#2ecc71" : "#DE562C")};
  font-weight: 600;
`;
