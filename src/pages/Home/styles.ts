import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  font-family: 'Poppins', sans-serif;
  background: #0d1117;
  color: #E8EBED;
  min-height: 100vh;
`;

export const BarraLateral = styled.div`
  width: 250px;
  background: #161b22;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 20px;
      cursor: pointer;
      font-weight: 600;
      color: #7A8A96;
      font-size: 16px;
      letter-spacing: 0.5px;
      transition: color 0.3s, transform 0.3s;

      &:hover {
        color: #DE562C;
        transform: translateX(5px);
      }
    }
  }
`;

export const ContainerHome = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background-color: #0d1117;
  font-family: 'Poppins', sans-serif;
  color: #E8EBED;
  min-height: 100vh;
  /* Removed align-items: center; to allow panels to take full width */
`;

export const DashBoardTitulo = styled.h1`
  color: #DE562C;
  font-size: 22px;
  margin-bottom: 12px;
`;

export const DashBoardPainelGest = styled.section`
  background: #161b22;
  padding: 24px 32px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  color: #E8EBED;
  width: 100%; /* Make it take full width of its parent */
  /* Removed max-width: 350px; */
  text-align: center;

  h2 {
    margin-bottom: 8px;
    color: #DE562C;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
  }

  p {
    font-size: 16px;
    margin: 4px 0;
    color: #7A8A96;
    text-align: center;
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
`;

export const DashBoardPainelCirculacao = styled.section`
  ${painelBase}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: italic;
  font-size: 15px;
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