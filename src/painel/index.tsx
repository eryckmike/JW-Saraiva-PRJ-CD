import { 
  PainelContainer, 
  PainelTitle, 
  ListaEntradasSaidas, 
  ItemEntradaSaida, 
  Coluna, 
  TipoMovimentacao 
} from "./style";

interface RegistroMovimentacao {
  id: number;
  data: string;
  horario: string;
  tipo: "Entrada" | "Saída";
  codigoVeiculo: string;
  motorista: string;
}

export function PainelEntradasSaidas() {
  const registros: RegistroMovimentacao[] = [
    { id: 1, data: "2025-05-30", horario: "07:15", tipo: "Entrada", codigoVeiculo: "ABC-1234", motorista: "Liz Macedo" },
    { id: 2, data: "2025-05-30", horario: "12:30", tipo: "Saída", codigoVeiculo: "ABC-1234", motorista: "Liz Macedo" },
    { id: 3, data: "2025-05-30", horario: "08:00", tipo: "Entrada", codigoVeiculo: "XYZ-5678", motorista: "Maria Souza" },
    { id: 4, data: "2025-05-30", horario: "09:45", tipo: "Entrada", codigoVeiculo: "DEF-9012", motorista: "Carlos Lima" },
    { id: 5, data: "2025-05-30", horario: "14:10", tipo: "Saída", codigoVeiculo: "DEF-9012", motorista: "Carlos Lima" },
  ];

  return (
    <PainelContainer>
      <PainelTitle>Entradas e Saídas</PainelTitle>
      <ListaEntradasSaidas>
        <ItemEntradaSaida header>
          <Coluna flex="2"><strong>Data</strong></Coluna>
          <Coluna flex="2"><strong>Horário</strong></Coluna>
          <Coluna flex="2"><strong>Tipo</strong></Coluna>
          <Coluna flex="3"><strong>Veículo</strong></Coluna>
          <Coluna flex="3"><strong>Motorista</strong></Coluna>
        </ItemEntradaSaida>

        {registros.map((registro) => (
          <ItemEntradaSaida key={registro.id}>
            <Coluna flex="2">{registro.data}</Coluna>
            <Coluna flex="2">{registro.horario}</Coluna>
            <Coluna flex="2">
              <TipoMovimentacao tipo={registro.tipo}>{registro.tipo}</TipoMovimentacao>
            </Coluna>
            <Coluna flex="3">{registro.codigoVeiculo}</Coluna>
            <Coluna flex="3">{registro.motorista}</Coluna>
          </ItemEntradaSaida>
        ))}
      </ListaEntradasSaidas>
    </PainelContainer>
  );
}
