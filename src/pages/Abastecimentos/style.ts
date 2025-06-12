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
    font-weight: 500;
  }

  font-size: 15.5px;
  color: #E8EBED;
  font-weight: 500;
`;

/* ------------ abaixo, o CRUD/modal ------------ */

export const PainelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  button {
    background: #DE562C;
    border: none;
    color: #fff;
    width: 2rem;
    height: 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }
  button:hover {
    background: #bf4523;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const ModalContainer = styled.div`
  background: #161b22;
  color: #E8EBED;
  border-radius: 12px;
  padding: 24px;
  width: 90%;
  max-width: 420px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.8);
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: slideIn 0.2s ease;

  @keyframes slideIn {
    from { transform: translateY(-10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 20px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;

  h2 {
    margin: 0;
    color: #DE562C;
    font-size: 1.25rem;
    font-weight: 600;
  }

  button {
    background: transparent;
    border: none;
    color: #7A8A96;
    font-size: 1.25rem;
    cursor: pointer;
    transition: color 0.2s;
    padding: 4px;

    &:hover {
      color: #E8EBED;
    }
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-size: 0.85rem;
    font-weight: 500;

    input,
    select {
      margin-top: 4px;
      width: 100%;
      padding: 6px 8px;
      border-radius: 6px;
      border: 1px solid #30363d;
      background: #0d1117;
      color: #E8EBED;
      font-size: 0.9rem;
      outline: none;
      transition: border-color 0.2s;

      &:focus {
        border-color: #DE562C;
      }
    }
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;

  button {
    padding: 6px 14px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.85rem;
    transition: all 0.2s;

    &.cancel {
      background: #30363d;
      color: #E8EBED;

      &:hover {
        background: #424751;
      }
    }

    &.save {
      background: #DE562C;
      color: white;

      &:hover {
        background: #bf4523;
      }
    }
  }
`;
