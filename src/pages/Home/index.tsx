import {
  ContainerHome,
  DashBoardTitulo,
  DashBoardPainelGest,
  DashBoardPainelAusentes,
  DashBoardPainelCirculacao,
} from "./styles";


export function Home() {
  return (
    <ContainerHome>
      <DashBoardPainelGest>
        <DashBoardTitulo>Painel de Gestão</DashBoardTitulo>
        <h2>Resumo Geral</h2>
        <p>Total de motoristas: <strong>15</strong></p>
      </DashBoardPainelGest>
      <DashBoardPainelAusentes>
        <DashBoardTitulo>Tarefas Pendentes</DashBoardTitulo>
        <p>Sem tarefas no momento.</p>
      </DashBoardPainelAusentes>
      <DashBoardPainelCirculacao>
        <DashBoardTitulo>Fora de Circulação</DashBoardTitulo>
        <p>Nenhum veículo fora de circulação.</p>
      </DashBoardPainelCirculacao>
    </ContainerHome>
  );
}