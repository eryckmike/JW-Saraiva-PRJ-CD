import React, { useState, useEffect } from "react";
import {
  ContainerHome,
  DashBoardTitulo,
  DashBoardPainelGest,
  DashBoardPainelAusentes,
  DashBoardPainelCirculacao,
  ColunaEsquerda,
  ColunaDireita,
  ContentWrapper
} from "./styles";

// interfaces para tipar os dados
interface VeiculoDTO { id: number; placa: string; cor: string; categoria: string }
interface MotoristaDTO { id: number; nome: string; /* …outras props */ }
interface ManutDTO { veiculo: VeiculoDTO; /* …outras props */ }
interface ViagemDTO { veiculo: VeiculoDTO; motorista: MotoristaDTO; dataSaida: string; dataVolta: string }

export function Home() {
  const [totalVeiculosDisp, setTotalVeiculosDisp]         = useState(0);
  const [totalVeiculosIndisp, setTotalVeiculosIndisp]     = useState(0);
  const [veiculosEmViagem, setVeiculosEmViagem]           = useState(0);
  const [motoristasDisp, setMotoristasDisp]               = useState(0);

  const [veiculosEmManutencao, setVeiculosEmManutencao]   = useState<VeiculoDTO[]>([]);
  const [veiculosForaViagem, setVeiculosForaViagem]       = useState<VeiculoDTO[]>([]);

    useEffect(() => {
    Promise.all([
      fetch("http://localhost:3000/veiculos").then(r => r.json() as Promise<VeiculoDTO[]>),
      fetch("http://localhost:3000/manutencoes").then(r => r.json() as Promise<ManutDTO[]>),
      fetch("http://localhost:3000/viagens").then(r => r.json() as Promise<ViagemDTO[]>),
      fetch("http://localhost:3000/motoristas").then(r => r.json() as Promise<MotoristaDTO[]>)
    ]).then(([veiculos, manutencoes, viagens, motoristas]) => {
      const agora = new Date();

      // 1) Veículos em manutenção (todos os que têm registro de manutenção)
      const manutIds = new Set(manutencoes.map(m => m.veiculo.id));
      const emManut   = veiculos.filter(v => manutIds.has(v.id));
      setVeiculosEmManutencao(emManut);

      // 2) Viagens em curso (dataSaida ≤ agora < dataVolta)
      const emViagemRegs = viagens.filter(via => {
        const ds = new Date(via.dataSaida), dv = new Date(via.dataVolta);
        return ds <= agora && agora < dv;
      });
      const viagemIds = new Set(emViagemRegs.map(via => via.veiculo.id));
      setVeiculosEmViagem(viagemIds.size);

      // 3) Disponibilidade de veículos
      const indisponiveisIds = new Set([...manutIds, ...viagemIds]);
      setTotalVeiculosIndisp(indisponiveisIds.size);
      setTotalVeiculosDisp(veiculos.length - indisponiveisIds.size);

      // 4) Motoristas disponíveis (não estão em viagem)
      const motoristasEmViagemIds = new Set(emViagemRegs.map(via => via.motorista.id));
      setMotoristasDisp(
        motoristas.filter(m => !motoristasEmViagemIds.has(m.id)).length
      );

      // 5) Veículos “fora de circulação” = não estão em viagem
      setVeiculosForaViagem(
        veiculos.filter(v => !viagemIds.has(v.id))
      );
    }).catch(console.error);
  }, []);

  return (
    <ContainerHome>
      <ContentWrapper>
      <ColunaEsquerda>
      <DashBoardPainelGest>
        <DashBoardTitulo>Painel de Gestão</DashBoardTitulo>
        <h2>Resumo Geral</h2>
        <p>Total de veículos disponíveis: <strong>{totalVeiculosDisp}</strong></p>
        <p>Total de veículos indisponíveis: <strong>{totalVeiculosIndisp}</strong></p>
        <p>Veículos em viagem: <strong>{veiculosEmViagem}</strong></p>
        <p>Motoristas disponíveis: <strong>{motoristasDisp}</strong></p>
      </DashBoardPainelGest>
      </ColunaEsquerda>

      {/* TAREFAS PENDENTES */}
      <ColunaDireita>
      <DashBoardPainelAusentes>
        <DashBoardTitulo>Tarefas Pendentes</DashBoardTitulo>
        {veiculosEmManutencao.length > 0 ? (
          <ul>
            {veiculosEmManutencao.map(v => (
              <li key={v.id}>{v.placa} ({v.categoria})</li>
            ))}
          </ul>
        ) : (
          <p>Não há veículos em manutenção.</p>
        )}
      </DashBoardPainelAusentes>

      {/* FORA DE CIRCULAÇÃO */}
      <DashBoardPainelCirculacao>
        <DashBoardTitulo>Fora de Circulação</DashBoardTitulo>
        {veiculosForaViagem.length > 0 ? (
          <ul>
            {veiculosForaViagem.map(v => (
              <li key={v.id}>{v.placa} ({v.categoria})</li>
            ))}
          </ul>
        ) : (
          <p>Todos os veículos estão em viagem.</p>
        )}
      </DashBoardPainelCirculacao>
    </ColunaDireita>
    </ContentWrapper>
    </ContainerHome>
  );
}