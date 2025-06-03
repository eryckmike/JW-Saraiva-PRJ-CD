import {
  PainelContainer,
  PainelTitle,
  ListaMultas,
  CartaoMulta,
  LinhaInfo,
  Coluna,
  Status
} from "./styles";

interface RegistroMulta {
  id: number;
  motorista: string;
  tipo: string;
  caminhao: string;
  valor: string;
  data: string;
  horario: string;
  situacao: "Paga" | "Pendente";
}

export function PainelMultas() {
  const multas: RegistroMulta[] = [
    {
      id: 1,
      motorista: "Carlos Lima",
      tipo: "Excesso de velocidade",
      caminhao: "ABC-1234",
      valor: "R$ 350,00",
      data: "2025-06-01",
      horario: "14:32",
      situacao: "Pendente"
    },
    {
      id: 2,
      motorista: "Maria Souza",
      tipo: "Estacionamento proibido",
      caminhao: "XYZ-5678",
      valor: "R$ 180,00",
      data: "2025-06-02",
      horario: "09:10",
      situacao: "Paga"
    }
  ];

  return (
    <PainelContainer>
      <PainelTitle>Multas</PainelTitle>
      <ListaMultas>
        {multas.map((registro) => (
          <CartaoMulta key={registro.id}>
            <LinhaInfo>
              <Coluna><span>Motorista</span>{registro.motorista}</Coluna>
              <Coluna><span>Multa</span>{registro.tipo}</Coluna>
              <Coluna><span>Caminhão</span>{registro.caminhao}</Coluna>
            </LinhaInfo>
            <LinhaInfo>
              <Coluna><span>Data</span>{registro.data}</Coluna>
              <Coluna><span>Horário</span>{registro.horario}</Coluna>
              <Coluna><span>Valor</span>{registro.valor}</Coluna>
              <Coluna>
                <span>Situação</span>
                <Status status={registro.situacao}>{registro.situacao}</Status>
              </Coluna>
            </LinhaInfo>
          </CartaoMulta>
        ))}
      </ListaMultas>
    </PainelContainer>
  );
}
