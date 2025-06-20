import { useEffect, useState } from 'react';
import {
  AppContainer,
  ContainerHome,
  ColunaEsquerda,
  ColunaDireita,
  DashBoardPainelGest,
  DashBoardPainelAusentes,

} from './styles';

interface Veiculo {
  id: number | string;
  placa: string;
}
interface Manutencao {
  veiculoId: number | string;
  motivo?: string;
  dataSaida?: string;
}
interface Viagem {
  veiculoId: number | string;
  motoristaId: number | string;
  dataVolta?: string;
}
interface Motorista {
  id: number | string;
  nome: string;
}

export function Home() {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [viagens, setViagens] = useState<Viagem[]>([]);
  const [manutencoes, setManutencoes] = useState<Manutencao[]>([]);
  const [motoristas, setMotoristas] = useState<Motorista[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/veiculos').then(res => res.json()).then(setVeiculos);
    fetch('http://localhost:3000/viagens').then(res => res.json()).then(setViagens);
    fetch('http://localhost:3000/manutencoes').then(res => res.json()).then(setManutencoes);
    fetch('http://localhost:3000/motoristas').then(res => res.json()).then(setMotoristas);
  }, []);

  const veiculosEmManutencao = veiculos.filter(v => manutencoes.some(m => String(m.veiculoId) === String(v.id) && !m.dataSaida));
  const veiculosEmViagem = veiculos.filter(v => viagens.some(vi => String(vi.veiculoId) === String(v.id) && !vi.dataVolta));
  const veiculosDisponiveis = veiculos.filter(v =>
    !veiculosEmManutencao.includes(v) && !veiculosEmViagem.includes(v)
  );
  const motoristasDisponiveis = motoristas.filter(m =>
    !viagens.some(vi => String(vi.motoristaId) === String(m.id) && !vi.dataVolta)
  );

  const tarefasPendentes = manutencoes
    .filter(m => !m.dataSaida)
    .map(m => {
      const veiculo = veiculos.find(v => String(v.id) === String(m.veiculoId));
      return veiculo
        ? `${veiculo.placa} — ${m.motivo || "Manutenção"}`
        : `${m.motivo || "Manutenção"}`;
    });

  return (
    <AppContainer>
      <ContainerHome>
        <ColunaEsquerda>
          <DashBoardPainelGest>
            <h2>Painel de Gestão</h2>
            <p>Total de veículos disponíveis: <strong>{veiculosDisponiveis.length}</strong></p>
            <p>Total de veículos indisponíveis: <strong>{veiculosEmManutencao.length}</strong></p>
            <p>Veículos em viagem: <strong>{veiculosEmViagem.length}</strong></p>
            <p>Motoristas disponíveis: <strong>{motoristasDisponiveis.length}</strong></p>
          </DashBoardPainelGest>
        </ColunaEsquerda>
        <ColunaDireita>
          <DashBoardPainelAusentes>
            <h2>Tarefas Pendentes</h2>
            <ul>
              {tarefasPendentes.length === 0 && <li>Nenhuma tarefa pendente</li>}
              {tarefasPendentes.map((desc, i) => <li key={i}>{desc}</li>)}
            </ul>
          </DashBoardPainelAusentes>
        </ColunaDireita>
      </ContainerHome>
    </AppContainer>
  );
}
