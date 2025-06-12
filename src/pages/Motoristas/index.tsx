import React, { useState, FormEvent } from "react";
import {
  MotoristasContainer,
  PainelMotoristas,
  MotoristasHeader,
  BarraPesquisa,
  GradeMotoristas,
  CartaoMotorista,
  AcoesIcones,
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalForm,
  ModalActions
} from "./styles";
import { Pencil, Trash2, Plus } from "lucide-react";

interface Motorista {
  id: number;
  nome: string;
  categoria: string;
}

export function Motoristas() {
  const [busca, setBusca] = useState("");
  const [motoristas, setMotoristas] = useState<Motorista[]>([
    { id: 1, nome: "Nicole Bahls", categoria: "A" },
    { id: 2, nome: "João Pedro", categoria: "D" },
    { id: 3, nome: "Maria Clara", categoria: "B" },
    { id: 4, nome: "Carlos Silva", categoria: "C" },
    { id: 5, nome: "Fernanda Souza", categoria: "E" },
    { id: 6, nome: "José Raimundo", categoria: "D" }
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newNome, setNewNome] = useState("");
  const [newCat, setNewCat] = useState("");

  const motoristasFiltrados = motoristas.filter(
    m =>
      m.nome.toLowerCase().includes(busca.toLowerCase()) ||
      m.id.toString().includes(busca)
  );

  const deletarMotorista = (id: number) =>
    setMotoristas(prev => prev.filter(m => m.id !== id));

  const editarMotorista = (id: number) => {
    const novoNome = prompt("Digite o novo nome do motorista:");
    const novaCategoria = prompt("Digite a nova categoria:");
    if (novoNome && novaCategoria) {
      setMotoristas(prev =>
        prev.map(m =>
          m.id === id
            ? { ...m, nome: novoNome, categoria: novaCategoria.toUpperCase() }
            : m
        )
      );
    }
  };

  function handleAddSubmit(e: FormEvent) {
    e.preventDefault();
    const nextId = Math.max(0, ...motoristas.map(m => m.id)) + 1;
    setMotoristas(prev => [
      ...prev,
      { id: nextId, nome: newNome, categoria: newCat.toUpperCase() }
    ]);
    setIsAdding(false);
    setNewNome("");
    setNewCat("");
  }

  return (
    <MotoristasContainer>
      <PainelMotoristas>
        <MotoristasHeader>
          <BarraPesquisa>
            <input
              type="text"
              placeholder="Nome / Cod. Motorista"
              value={busca}
              onChange={e => setBusca(e.target.value)}
            />
          </BarraPesquisa>
          <button onClick={() => setIsAdding(true)}>
            <Plus size={18} />
          </button>
        </MotoristasHeader>

        <GradeMotoristas>
          {motoristasFiltrados.length > 0 ? (
            motoristasFiltrados.map(m => (
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

      {isAdding && (
        <Overlay>
          <ModalContainer>
            <ModalHeader>
              <h2>Novo Motorista</h2>
              <button onClick={() => setIsAdding(false)}>×</button>
            </ModalHeader>
            <ModalForm onSubmit={handleAddSubmit}>
              <label>
                Nome
                <input
                  value={newNome}
                  onChange={e => setNewNome(e.target.value)}
                  required
                />
              </label>
              <label>
                Categoria
                <select
                  value={newCat}
                  onChange={e => setNewCat(e.target.value)}
                  required
                >
                  <option value="">Selecione...</option>
                  {["A", "B", "C", "D", "E"].map(c => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>
              <ModalActions>
                <button
                  type="button"
                  className="cancel"
                  onClick={() => setIsAdding(false)}
                >
                  Cancelar
                </button>
                <button type="submit" className="save">
                  Salvar
                </button>
              </ModalActions>
            </ModalForm>
          </ModalContainer>
        </Overlay>
      )}
    </MotoristasContainer>
  );
}
