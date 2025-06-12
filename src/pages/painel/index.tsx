import React, { useState, useEffect } from "react";
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
  // 1) Estado para guardar os registros vindos do servidor
  const [registros, setRegistros] = useState<RegistroMovimentacao[]>([]);

  // 2) Efeito para buscar as movimentações ao montar o componente
  useEffect(() => {
    fetch("http://localhost:3000/entradas-saidas")
      .then((res) => {
        if (!res.ok) throw new Error("Falha ao carregar dados");
        return res.json();
      })
      .then((dados: RegistroMovimentacao[]) => setRegistros(dados))
      .catch((err) => console.error(err));
  }, []);

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
              <TipoMovimentacao tipo={registro.tipo}>
                {registro.tipo}
              </TipoMovimentacao>
            </Coluna>
            <Coluna flex="3">{registro.codigoVeiculo}</Coluna>
            <Coluna flex="3">{registro.motorista}</Coluna>
          </ItemEntradaSaida>
        ))}
      </ListaEntradasSaidas>
    </PainelContainer>
  );
}
