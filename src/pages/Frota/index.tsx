import { FrotasConteiner, VeiculosPainel, BarraPesquisa, GradeVeiculos, CartaoVeiculo, AcoesIcones } from "./styles";
import { useState } from 'react';
import { Pencil, Trash2 } from "lucide-react";

export function Frotas() {
  const [placa, setPlaca] = useState('');
  const [veiculos, setVeiculos] = useState([
    { id: 1, placa: "ABC-1234", modelo: "HB20" },
    { id: 2, placa: "XYZ-5678", modelo: "Corolla" },
  ]);

  const consultarVeiculo = async () => {
    try {
      const response = await fetch(`/api/veiculos?placa=${encodeURIComponent(placa)}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar veículo');
      }
      const data = await response.json();
      setVeiculos(data);
    } catch (error) {
      console.error('Erro na consulta:', error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      consultarVeiculo();
    }
  };

  const deletarVeiculo = (id: number) => {
    setVeiculos((prevVeiculos) => prevVeiculos.filter((v) => v.id !== id));
  };

  const editarVeiculo = (id: number) => {
    const novoModelo = prompt("Digite o novo modelo:");
    if (novoModelo) {
      setVeiculos((prevVeiculos) =>
        prevVeiculos.map((v) =>
          v.id === id ? { ...v, modelo: novoModelo } : v
        )
      );
    }
  };

  return (
    <FrotasConteiner>
      <VeiculosPainel>
        <BarraPesquisa>
          <input 
            type="text" 
            placeholder="Placa / Cod. Veículo" 
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </BarraPesquisa>

        <GradeVeiculos>
          {veiculos.length > 0 ? (
            veiculos.map((v) => (
              <CartaoVeiculo key={v.id}>
                <AcoesIcones>
                  <Pencil 
                    size={18} 
                    color="#E8EBED" 
                    onClick={() => editarVeiculo(v.id)} 
                  />
                  <Trash2 
                    size={18} 
                    color="#DE562C" 
                    onClick={() => deletarVeiculo(v.id)} 
                  />
                </AcoesIcones>
                <p>{v.placa}</p>
                <p>{v.modelo}</p>
              </CartaoVeiculo>
            ))
          ) : (
            <p>Nenhum veículo encontrado</p>
          )}
        </GradeVeiculos>
      </VeiculosPainel>
    </FrotasConteiner>
  );
}
