import {
  PainelContainer,
  PainelTitle,
  ListaAbastecimentos,
  CartaoAbastecimento,
  LinhaInfo,
  Coluna
} from "./style";

interface RegistroAbastecimento {
  id: number;
  data: string;
  horario: string;
  caminhao: string;
  motorista: string;
  valor: string;
  local: string;
}

export function PainelAbastecimentos() {
  const abastecimentos: RegistroAbastecimento[] = [
    {
      id: 1,
      data: "2025-05-30",
      horario: "07:45",
      caminhao: "ABC-1234",
      motorista: "Carlos Lima",
      valor: "R$ 45000,00",
      local: "Aeroporto Internacional de Guarulhos - GRU"
    },
    {
      id: 2,
      data: "2025-05-30",
      horario: "11:10",
      caminhao: "XYZ-5678",
      motorista: "Antonella Braga",
      valor: "R$ 38560,00",
      local: "	Aeroporto Internacional Pinto Martins - FOR"
    },
    {
      id: 3,
      data: "2025-05-30",
      horario: "14:30",
      caminhao: "DEF-9012",
      motorista: "João Guilherme",
      valor: "R$ 1220,00",
      local: "	Aeroporto Internacional do Recife / Guararapes - REC"
    }
  ];

  return (
    <PainelContainer>
      <PainelTitle>Abastecimentos</PainelTitle>
      <ListaAbastecimentos>
        {abastecimentos.map((registro) => (
          <CartaoAbastecimento key={registro.id}>
            <LinhaInfo>
              <Coluna><span>Data</span>{registro.data}</Coluna>
              <Coluna><span>Horário</span>{registro.horario}</Coluna>
              <Coluna><span>Valor</span>{registro.valor}</Coluna>
            </LinhaInfo>
            <LinhaInfo>
              <Coluna><span>Caminhão</span>{registro.caminhao}</Coluna>
              <Coluna><span>Motorista</span>{registro.motorista}</Coluna>
            </LinhaInfo>
            <LinhaInfo>
              <Coluna width="100%"><span>Local</span>{registro.local}</Coluna>
            </LinhaInfo>
          </CartaoAbastecimento>
        ))}
      </ListaAbastecimentos>
    </PainelContainer>
  );
}
