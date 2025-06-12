import React, { useState, useEffect } from "react";
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
  veiculo: string;        // nome do veículo
  codigoVeiculo: string;  // código do veículo
}

export function PainelViagens() {
  const [viagens, setViagens] = useState<RegistroViagem[]>([]);
  const BASE_URL = "http://localhost:3000/viagens";

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data: any[]) => {
        const registros: RegistroViagem[] = data.map((item) => ({
          id: item.id,
          dataSaida: new Date(item.dataSaida).toLocaleDateString(),
          dataVolta: new Date(item.dataVolta).toLocaleDateString(),
          motorista: item.motorista.nome,
          origem: item.origem,
          destino: item.destino,
          veiculo: item.veiculo.nome,         // usa o campo nome do veículo
          codigoVeiculo: item.veiculo.codigo, // usa o campo código
        }));
        setViagens(registros);
      })
      .catch((err) => {
        console.error("Erro ao buscar viagens:", err);
      });
  }, []); // <-- não esqueça o array de dependências vazio!

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
                <span>Origem</span>
                {registro.origem}
              </Coluna>
            </LinhaInfo>

            <LinhaInfo>
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
