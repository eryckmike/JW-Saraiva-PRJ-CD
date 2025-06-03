import {
  PainelContainer,
  PainelTitle,
  ListaManutencoes,
  CartaoManutencao,
  LinhaInfo,
  Coluna,
  Aviso
} from "./style";

interface RegistroManutencao {
  id: number;
  veiculo: string;
  codigo: string;
  aviso: string;
  dataEntrada: string;
  dataSaida: string;
}

export function PainelManutencao() {
  const manutencoes: RegistroManutencao[] = [
    {
      id: 1,
      veiculo: "Caminhão Volvo FH",
      codigo: "VOL-FH-001",
      aviso: "Troca de óleo programada",
      dataEntrada: "2025-06-01",
      dataSaida: "2025-06-05"
    },
    {
      id: 2,
      veiculo: "Mercedes-Benz Actros",
      codigo: "MB-ACT-002",
      aviso: "Revisão dos freios",
      dataEntrada: "2025-06-02",
      dataSaida: "2025-06-06"
    }
  ];

  return (
    <PainelContainer>
      <PainelTitle>Manutenções</PainelTitle>
      <ListaManutencoes>
        {manutencoes.map((registro) => (
          <CartaoManutencao key={registro.id}>
            <LinhaInfo>
              <Coluna>
                <span>Veículo</span>
                {registro.veiculo}
              </Coluna>
              <Coluna>
                <span>Código</span>
                {registro.codigo}
              </Coluna>
            </LinhaInfo>
            <LinhaInfo>
              <Coluna>
                <span>Entrada</span>
                {registro.dataEntrada}
              </Coluna>
              <Coluna>
                <span>Saída esperada</span>
                {registro.dataSaida}
              </Coluna>
            </LinhaInfo>
            <LinhaInfo>
              <Coluna width="100%">
                <span>Aviso</span>
                <Aviso>
                  <input value={registro.aviso} readOnly />
                </Aviso>
              </Coluna>
            </LinhaInfo>
          </CartaoManutencao>
        ))}
      </ListaManutencoes>
    </PainelContainer>
  );
}
