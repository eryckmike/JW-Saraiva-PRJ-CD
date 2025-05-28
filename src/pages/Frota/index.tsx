import { FrotasConteiner, BarraLateral, VeiculosPainel, BarraPesquisa, GradeVeiculos, CartaoVeiculo } from "./styles";
import { useState } from 'react';
 

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
        // Opcional: setar veiculos como vazio ou mensagem de erro.
      }
    };
  
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        consultarVeiculo();
      }
    };

        return (
            <FrotasConteiner>
              <BarraLateral>
                <ul>
                  <li>Veículos</li>
                  <li>Viagens</li>
                  <li>Entradas/Saídas</li>
                  <li>Entradas/Saídas/CT's</li>
                  <li>Manutenções</li>
                  <li>Abastecimentos</li>
                  <li>Multas</li>
                  <li>Cadastras</li>
                </ul>
              </BarraLateral>
        
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