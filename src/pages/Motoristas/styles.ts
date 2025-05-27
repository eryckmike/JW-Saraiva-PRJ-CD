import { styled } from "styled-components";

export const MotoristasConteiner = styled.div`
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  gap: 3rem;
`;

export const BarraLateral = styled.aside`
  width: 250px;
  border-right: 4px solid #788793;
  padding: 2rem;
  color: #7a8a96;

  ul {
    list-style: none;
    padding: 0;
    font-size: 0.9rem;

    li {
      margin-bottom: 1.5rem;
      cursor: pointer;
      color: black;
    }
  }
`;

export const PainelMotoristas = styled.div`
  flex: 1;
  background-color: #e8ebed;
  border: 4px solid #788793;
  border-radius: 8px;
  padding: 2rem;
  width: 75%;
  max-width: 800px;
`;

export const BarraPesquisa = styled.div`
  margin-bottom: 2rem;

  input {
    width: 50%;
    padding: 0.75rem 1rem;
    border: 2px solid #7a8a96;
    border-radius: 1rem;
    outline: none;
    font-size: 1rem;
  }
`;

export const GradeMotoristas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.5rem;
  background-color: #eaeff2;
  padding: 3rem;
  border: 2px solid #7a8a96;
  border-radius: 6px;
`;

export const CartaoMotorista = styled.div`
  background-color: #7a8a96;
  height: 120px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
`;
