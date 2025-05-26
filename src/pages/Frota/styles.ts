import { styled } from "styled-components";


export const FrotasConteiner = styled.div`
display: flex;
align-items: center;
padding: 4rem 2rem;
gap: 3rem;

`
export const VeiculosPainel = styled.div`
background-color: #E8EBED;
flex: 1;
border: 4px solid #788793;
border-radius:8px;
padding: 2rem;
width: 75%;
max-width: 800px;
`

//Menu lateral/ sidebar
export const BarraLateral = styled.aside`

width: 200px;
border-right: 4px solid;
padding: 2rem 2rem;
color: #7a8a96;

ul{
    list-style: none;
    padding: 0;
    font-size: 0.9rem;

    li{
        margin-bottom: 1.5rem;
        cursor: pointer;
        color: black;
    }
}

`

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

export const GradeVeiculos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.5rem;
  background-color: #eaeff2;
  padding: 3rem;
  border: 2px solid #7a8a96;
  border-radius: 6px;
`;

export const CartaoVeiculo = styled.div`
  background-color: #7a8a96;
  height: 120px;
  border-radius: 4px;

  p{
    padding-top:1rem;
    padding-left: 1rem;
    color: #030507;
  }
`;