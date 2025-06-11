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

function EditarMotoristaModal({ motorista, onClose, onSave }) {
  const [nome, setNome] = useState(motorista.nome);
  const [categoria, setCategoria] = useState(motorista.categoria);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...motorista, nome, categoria });
    onClose();
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#161b22', color: '#E8EBED', borderRadius: 16, padding: 32, minWidth: 320, boxShadow: '0 4px 32px #0008', display: 'flex', flexDirection: 'column', gap: 20
        }}
      >
        <h2 style={{margin:0, marginBottom: 16, color:'#DE562C', fontWeight:600, fontSize:22}}>Editar Motorista</h2>
        <label style={{fontWeight:500, fontSize:15}}>Nome:
          <input value={nome} onChange={e => setNome(e.target.value)} style={{ width: '100%', marginTop: 4, padding: 10, borderRadius: 8, border: '1px solid #30363d', background: '#0d1117', color: '#E8EBED', fontSize: 15 }} />
        </label>
        <label style={{fontWeight:500, fontSize:15}}>Categoria:
          <input value={categoria} onChange={e => setCategoria(e.target.value)} style={{ width: '100%', marginTop: 4, padding: 10, borderRadius: 8, border: '1px solid #30363d', background: '#0d1117', color: '#E8EBED', fontSize: 15 }} />
        </label>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 10 }}>
          <button type="button" onClick={onClose} style={{ background: '#30363d', color: '#E8EBED', border: 'none', borderRadius: 6, padding: '8px 18px', fontWeight: 500, fontSize: 15, cursor: 'pointer' }}>Cancelar</button>
          <button type="submit" style={{ background: '#DE562C', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer', boxShadow: '0 2px 8px #de562c22' }}>Salvar</button>
        </div>
      </form>
    </div>
  );
}

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
  const [editando, setEditando] = useState(null);

  const motoristasFiltrados = motoristas.filter(m =>
    m.nome.toLowerCase().includes(busca.toLowerCase()) ||
    m.id.toString().includes(busca)
  );

  const deletarMotorista = (id: number) => {
    setMotoristas((prev) => prev.filter((m) => m.id !== id));
  };

  const abrirModalEditar = (motorista) => {
    setEditando(motorista);
  };

  const salvarEdicao = (motoristaEditado) => {
    setMotoristas((prev) =>
      prev.map((m) =>
        m.id === motoristaEditado.id ? { ...m, nome: motoristaEditado.nome, categoria: motoristaEditado.categoria.toUpperCase() } : m
      )
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      //
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
                  <Pencil size={18} color="#E8EBED" onClick={() => abrirModalEditar(m)} />
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
      {editando && (
        <EditarMotoristaModal
          motorista={editando}
          onClose={() => setEditando(null)}
          onSave={salvarEdicao}
        />
      )}
    </MotoristasContainer>
  );
}
