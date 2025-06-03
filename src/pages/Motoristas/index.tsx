import React, { useState } from "react";
import {
  MotoristasContainer,
  PainelMotoristas,
  BarraPesquisa,
  GradeMotoristas,
  CartaoMotorista,
  AcoesIcones
} from "./styles";
import { Pencil, Trash2 } from "lucide-react";

export function Motoristas() {
  const [busca, setBusca] = useState("");
  const [motoristas, setMotoristas] = useState([
    { id: 1, nome: "Nicole Bahls", categoria: "A" },
    { id: 2, nome: "João Pedro", categoria: "D" },
    { id: 3, nome: "Maria Clara", categoria: "B" },
    { id: 4, nome: "Carlos Silva", categoria: "C" },
    { id: 5, nome: "Fernanda Souza", categoria: "E" },
    { id: 6, nome: "José Raimundo", categoria: "D" },
  ]);

  const motoristasFiltrados = motoristas.filter(m =>
    m.nome.toLowerCase().includes(busca.toLowerCase()) ||
    m.id.toString().includes(busca)
  );

  const deletarMotorista = (id: number) => {
    setMotoristas((prev) => prev.filter((m) => m.id !== id));
  };

  const editarMotorista = (id: number) => {
    const novoNome = prompt("Digite o novo nome do motorista:");
    const novaCategoria = prompt("Digite a nova categoria:");
    if (novoNome && novaCategoria) {
      setMotoristas((prev) =>
        prev.map((m) =>
          m.id === id ? { ...m, nome: novoNome, categoria: novaCategoria.toUpperCase() } : m
        )
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      
    }
  };

  return (
    <MotoristasContainer>
      <PainelMotoristas>
        <BarraPesquisa>
          <input
            type="text"
            placeholder="Nome / Cod. Motorista"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </BarraPesquisa>
        <GradeMotoristas>
          {motoristasFiltrados.length > 0 ? (
            motoristasFiltrados.map((m) => (
              <CartaoMotorista key={m.id}>
                <AcoesIcones>
                  <Pencil size={18} color="#E8EBED" onClick={() => editarMotorista(m.id)} />
                  <Trash2 size={18} color="#DE562C" onClick={() => deletarMotorista(m.id)} />
                </AcoesIcones>
                <p>{m.nome}</p>
                <p>Categoria {m.categoria}</p>
              </CartaoMotorista>
            ))
          ) : (
            <p>Nenhum motorista encontrado</p>
          )}
        </GradeMotoristas>
      </PainelMotoristas>
    </MotoristasContainer>
  );
}
