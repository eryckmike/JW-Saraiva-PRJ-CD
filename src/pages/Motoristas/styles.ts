import { styled } from "styled-components";

export const MotoristasContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: flex-start;
  background: #e1e6e8; /* cinza claro institucional */
  gap: 2rem;
  padding: 2rem;
`;

export const BarraLateral = styled.aside`
  width: 200px;
  background-color: #ffffff;
  border-right: 1px solid #7a8d9e;
  padding: 2rem 1rem;

  ul {
    list-style: none;
    padding: 0;
    font-size: 20px;

    li {
      margin-bottom: 1.25rem;
      cursor: pointer;
      color: #000000;
      transition: 0.3s;

      &:hover {
        color: #d24f2e; /* laranja JW */
      }
    }
  }
`;

export const PainelMotoristas = styled.div`
  flex: 1;
  background-color: #ffffff;
  border: 4px solid #7a8d9e;
  border-radius: 8px;
  padding: 2rem;
  max-width: 960px;
  margin: 2rem auto;
`;

export const BarraPesquisa = styled.div`
  margin-bottom: 2rem;

  input {
    width: 100%;
    max-width: 500px;
    padding: 0.75rem 1rem;
    border: 2px solid #7a8d9e;
    border-radius: 1rem;
    outline: none;
    font-size: 1rem;
  }
`;

export const GradeMotoristas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.5rem;
  background-color: #ffffff;
  padding: 2rem;
  border: 1px solid #7a8d9e;
  border-radius: 6px;
`;

export const CartaoMotorista = styled.div`
  background-color: #7a8d9e;
  height: 120px;
  border-radius: 6px;
  padding: 1rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  font-size: 0.95rem;

  p {
    margin: 0.25rem 0;
  }
`;
