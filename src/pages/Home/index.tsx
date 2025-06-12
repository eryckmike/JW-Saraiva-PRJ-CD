import React from 'react';
import {
  AppContainer,
  ContainerHome,
  ColunaEsquerda,
  ColunaDireita,
  DashBoardPainelGest,
  DashBoardPainelAusentes,
  DashBoardPainelCirculacao
} from './styles';

export function Home() {
  return (
    <AppContainer>
      <ContainerHome>
        <ColunaEsquerda>
          <DashBoardPainelGest>
            <h2>Painel de Gestão</h2>
            <p>Total de veículos disponiveis: <strong>1</strong></p>
            <p>Total de veículos indisponiveis: <strong>1</strong></p>
            <p>Veiculos em viagem: <strong>5</strong></p>
            <p>Motoristas disponiveis: <strong>1</strong></p>
          </DashBoardPainelGest>
        </ColunaEsquerda>

        <ColunaDireita>
          <DashBoardPainelAusentes>
            <h2>Tarefas Pendentes</h2>
            <ul>
              <li>Manutenção preventiva</li>
            </ul>
          </DashBoardPainelAusentes>

          <DashBoardPainelCirculacao>
            <h2>Fora de Circulação</h2>
            <ul>
              <li>TX-8921</li>
            </ul>
          </DashBoardPainelCirculacao>
        </ColunaDireita>
      </ContainerHome>
    </AppContainer>
  );
}
