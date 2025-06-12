import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  font-family: 'Poppins', sans-serif;
  background: #0d1117;
  color: #E8EBED;
  min-height: 100vh;
`;


export const ContainerHome = styled.main`
  flex: 1;
  display: flex;
  flex-direction: row;   
  gap: 20px;
  padding: 40px;
  background-color: #0d1117;
  font-family: 'Poppins', sans-serif;
  color: #E8EBED;
  min-height: 100vh;
`;
export const ColunaEsquerda = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: none;
  width: 65%;     
`;

export const ColunaDireita = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: none;
  width: 50%;
  
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  max-width: 1300px;    /* ou outro valor que preferir */
  width: 100%;
`;


export const DashBoardTitulo = styled.h1`
  color: #DE562C;
  font-size: 22px;
  margin-bottom: 12px;
`;

export const DashBoardPainelGest = styled.section`
  background: #161b22;
  padding: 32px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  color: #E8EBED;
  text-align: center;
  width: 100%;
  
  
  h2 {
    margin-bottom: 8px;
    color: #DE562C;
    font-weight: 600;
    font-size: 20px;
    text-align: left;
  }

  p {
    font-size: 16px;
    margin: 4px 0;
    color: #E8EBED;
    text-align: left;
  }

  strong {
    color: #E8EBED;
  }
`;

const painelBase = `
  background: #161b22;
  padding: 20px 28px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  color: #7A8A96;
  width: 100%; /* Already set to 100% in your previous code */
`;

export const DashBoardPainelAusentes = styled.section`
  ${painelBase}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: italic;
  font-size: 15px;
   ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;

    li {
      margin-bottom: 8px;
      font-size: 14px;
      color: #E8EBED;
      span:first-child { font-weight: 600; }
    }
  }
`;

export const DashBoardPainelCirculacao = styled.section`
  ${painelBase}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: italic;
  font-size: 15px;
    ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;

    li {
      margin-bottom: 8px;
      font-size: 14px;
      color: #E8EBED;
   }
  }
`;

export const MotoristasConteiner = styled.div`
  display: flex;
  font-family: 'Poppins', sans-serif;
  background: #0d1117;
  color: #E8EBED;
  min-height: 100vh;
`;

export const PainelMotoristas = styled.div`
  flex: 1;
  padding: 40px;
`;

export const BarraPesquisa = styled.div`
  margin-bottom: 30px;

  input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #30363d;
    border-radius: 8px;
    background: #0d1117;
    color: #E8EBED;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;

    &::placeholder {
      color: #7A8A96;
    }

    &:focus {
      border-color: #DE562C;
      box-shadow: 0 0 0 3px rgba(222, 86, 44, 0.3);
    }
  }
`;

export const GradeMotoristas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const CartaoMotorista = styled.div`
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.3s, border-color 0.3s;

  &:hover {
    transform: translateY(-5px);
    border-color: #DE562C;
  }

  p {
    margin: 0 0 8px 0;
    font-size: 14px;
    color: #E8EBED;

    &:first-child {
      font-weight: bold;
      font-size: 16px;
      color: #DE562C;
    }
  }
`;