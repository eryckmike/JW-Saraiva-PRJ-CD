import {
  PainelContainer,
  PainelTitle,
  ListaViagens,
  CartaoViagem,
  LinhaInfo,
  Coluna
} from "./style";

interface RegistroViagem {
  id: number;
  dataSaida: string;
  dataVolta: string;
  motorista: string;
  origem: string;
  destino: string;
  veiculo: string;
  codigoVeiculo: string;
}

export function PainelViagens() {
  const viagens: RegistroViagem[] = [
    {
      id: 1,
      dataSaida: "2025-06-03",
      dataVolta: "2025-06-13",
      motorista: "Antonella Braga",
      origem: "Fortaleza - CE",
      destino: "Recife - PE",
      veiculo: "Mercedes-Benz Actros",
      codigoVeiculo: "MB-ACT-002"
    },
    {
      id: 2,
      dataSaida: "2025-06-10",
      dataVolta: "2025-06-22",
      motorista: "Gilvandro Neto",
      origem: "Fortaleza - CE",
      destino: "Natal - RN",
      veiculo: "Volvo FH",
      codigoVeiculo: "VOL-FH-001"
    }
  ];

  return (
    <PainelContainer>
      <PainelTitle>Viagens</PainelTitle>
      <ListaViagens>
        {viagens.map((registro) => (
          <CartaoViagem key={registro.id}>
            <LinhaInfo>
              <Coluna>
                <span>Saída</span>
                {registro.dataSaida}
              </Coluna>
              <Coluna>
                <span>Volta</span>
                {registro.dataVolta}
              </Coluna>
            </LinhaInfo>
            <LinhaInfo>
              <Coluna>
                <span>Motorista</span>
                {registro.motorista}
              </Coluna>
              <Coluna>
                <span>Caminhão</span>
                {registro.veiculo}
              </Coluna>
            </LinhaInfo>
            <LinhaInfo>
              <Coluna>
                <span>Origem</span>
                {registro.origem}
              </Coluna>
              <Coluna>
                <span>Destino</span>
                {registro.destino}
              </Coluna>
            </LinhaInfo>
            <LinhaInfo>
              <Coluna style={{ width: "100%" }}>
                <span>Código do Caminhão</span>
                {registro.codigoVeiculo}
              </Coluna>
            </LinhaInfo>
          </CartaoViagem>
        ))}
      </ListaViagens>
    </PainelContainer>
  );
}
