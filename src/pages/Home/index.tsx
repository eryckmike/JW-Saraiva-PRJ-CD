import { ContainerHome, DashBoardTitulo, DashBoardPainelGest, DashBoardPainelAusentes, DashBoardPainelCirculacao, TabelaDireita} from "./styles";


export function Home() {
  return (
    <>
    <ContainerHome>
      <div>
        <DashBoardTitulo>Painel de Gestão</DashBoardTitulo>
        <DashBoardPainelGest>
          <h2>Resumo Geral</h2>
          <p>Total de motoristas</p>
        </DashBoardPainelGest>
      </div>

      <TabelaDireita>

        <div>
          <DashBoardTitulo>Tarefas Pendentes</DashBoardTitulo>
          <DashBoardPainelAusentes>

          </DashBoardPainelAusentes>
        </div>

        <div>
          <DashBoardTitulo>Fora de Circulação</DashBoardTitulo>
          <DashBoardPainelCirculacao>

          </DashBoardPainelCirculacao>
        </div>

      </TabelaDireita>
    </ContainerHome>
    </>
  )
}

