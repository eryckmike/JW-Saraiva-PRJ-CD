import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #0c0f14;
  color: #fff;
  padding: 2rem;
  font-family: 'Poppins', sans-serif;
`;

export const ContainerHome = styled.div`
  flex: 1;
  display: flex;
  gap: 2rem;
  margin: 2rem auto 0;
  padding: 0 2rem;
  max-width: 1400px;
  width: 100%;
  /* Faz as colunas preencherem toda a altura restante */
  align-items: stretch;
`;

export const ColunaEsquerda = styled.div`
  flex: 2;                /* aumenta proporção da esquerda */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* Faz o painel interno esticar verticalmente */
  align-items: stretch;
`;

export const ColunaDireita = styled.div`
  flex: 1;                /* mantém proporção 2:1 */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: stretch;
`;

const CardBase = styled.div`
  background-color: #151a22;
  border-radius: 12px;
  padding: 1.5rem;
  border: 2px solid transparent;
  transition: border 0.3s ease;
  font-family: 'Poppins', sans-serif;
  
  /* permite o card crescer para preencher o espaço */
  flex: 1; 
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: #f4511e;
  }
`;

export const DashBoardPainelGest = styled(CardBase)`
  h2 {
    font-size: 1.5rem;
    color: #f4511e;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  strong {
    color: #fff;
  }
`;

export const DashBoardPainelAusentes = styled(CardBase)`
  h2 {
    font-size: 1.3rem;
    color: #f4511e;
    font-style: italic;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    flex: 1; /* faz a lista ocupar o resto do card */
    overflow-y: auto;
  }

  li {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    
    span {
      font-weight: bold;
      color: #E8EBED;
    }
  }
`;

export const DashBoardPainelCirculacao = styled(CardBase)`
  h2 {
    font-size: 1.3rem;
    color: #f4511e;
    font-style: italic;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    flex: 1;
    overflow-y: auto;
  }

  li {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #E8EBED;
  }
`;
