import React, { useState, FormEvent } from "react";
import {
  PainelContainer,
  PainelTitle,
  ListaMultas,
  CartaoMulta,
  LinhaInfo,
  Coluna,
  Status,
  PainelHeader,
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalForm,
  ModalActions
} from "./styles";
import { Pencil, Trash2, Plus } from "lucide-react";

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

// Aqui omitimos o id, pois o form não edita/cria o id
type MultaForm = Omit<RegistroMulta, "id">;

export function PainelMultas() {
  const [multas, setMultas] = useState<RegistroMulta[]>([
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
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [form, setForm] = useState<MultaForm>({
    motorista: "",
    tipo: "",
    caminhao: "",
    valor: "",
    data: "",
    horario: "",
    situacao: "Pendente"
  });

  const openAdd = () => {
    setForm({
      motorista: "",
      tipo: "",
      caminhao: "",
      valor: "",
      data: "",
      horario: "",
      situacao: "Pendente"
    });
    setEditingId(null);
    setIsAdding(true);
  };

  const openEdit = (m: RegistroMulta) => {
    const { id, ...rest } = m;
    setForm(rest);
    setEditingId(id);
  };

  const closeModal = () => {
    setIsAdding(false);
    setEditingId(null);
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (editingId !== null) {
      // edição
      setMultas(prev =>
        prev.map(m =>
          m.id === editingId ? { id: editingId, ...form } : m
        )
      );
    } else {
      // criação
      const nextId = Math.max(0, ...multas.map(m => m.id)) + 1;
      setMultas(prev => [...prev, { id: nextId, ...form }]);
    }

    closeModal();
  }

  const handleDelete = (id: number) => {
    setMultas(prev => prev.filter(m => m.id !== id));
  };

  return (
    <PainelContainer>
      <PainelHeader>
        <PainelTitle>Multas</PainelTitle>
        <button onClick={openAdd}><Plus size={18} /></button>
      </PainelHeader>

      <ListaMultas>
        {multas.map(r => (
          <CartaoMulta key={r.id}>
            <LinhaInfo>
              <Coluna><span>Motorista</span>{r.motorista}</Coluna>
              <Coluna><span>Multa</span>{r.tipo}</Coluna>
              <Coluna><span>Caminhão</span>{r.caminhao}</Coluna>
            </LinhaInfo>
            <LinhaInfo>
              <Coluna><span>Data</span>{r.data}</Coluna>
              <Coluna><span>Horário</span>{r.horario}</Coluna>
              <Coluna><span>Valor</span>{r.valor}</Coluna>
              <Coluna>
                <span>Situação</span>
                <Status status={r.situacao}>{r.situacao}</Status>
              </Coluna>
            </LinhaInfo>
            <div style={{ textAlign: "right", marginTop: 8 }}>
              <Pencil
                size={18}
                color="#E8EBED"
                style={{ cursor: "pointer", marginRight: 12 }}
                onClick={() => openEdit(r)}
              />
              <Trash2
                size={18}
                color="#DE562C"
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(r.id)}
              />
            </div>
          </CartaoMulta>
        ))}
      </ListaMultas>

      {(isAdding || editingId !== null) && (
        <Overlay>
          <ModalContainer>
            <ModalHeader>
              <h2>{editingId !== null ? "Editar Multa" : "Nova Multa"}</h2>
              <button onClick={closeModal}>×</button>
            </ModalHeader>
            <ModalForm onSubmit={handleSubmit}>
              <label>
                Motorista
                <input
                  required
                  value={form.motorista}
                  onChange={e => setForm(f => ({ ...f, motorista: e.target.value }))}
                />
              </label>
              <label>
                Multa
                <input
                  required
                  value={form.tipo}
                  onChange={e => setForm(f => ({ ...f, tipo: e.target.value }))}
                />
              </label>
              <label>
                Caminhão
                <input
                  required
                  value={form.caminhao}
                  onChange={e => setForm(f => ({ ...f, caminhao: e.target.value }))}
                />
              </label>
              <label>
                Data
                <input
                  type="date"
                  required
                  value={form.data}
                  onChange={e => setForm(f => ({ ...f, data: e.target.value }))}
                />
              </label>
              <label>
                Horário
                <input
                  type="time"
                  required
                  value={form.horario}
                  onChange={e => setForm(f => ({ ...f, horario: e.target.value }))}
                />
              </label>
              <label>
                Valor
                <input
                  required
                  value={form.valor}
                  onChange={e => setForm(f => ({ ...f, valor: e.target.value }))}
                />
              </label>
              <label>
                Situação
                <select
                  value={form.situacao}
                  onChange={e => setForm(f => ({ ...f, situacao: e.target.value as "Paga" | "Pendente" }))}
                >
                  <option value="Pendente">Pendente</option>
                  <option value="Paga">Paga</option>
                </select>
              </label>
              <ModalActions>
                <button type="button" className="cancel" onClick={closeModal}>
                  Cancelar
                </button>
                <button type="submit" className="save">
                  {editingId !== null ? "Salvar" : "Adicionar"}
                </button>
              </ModalActions>
            </ModalForm>
          </ModalContainer>
        </Overlay>
      )}
    </PainelContainer>
  );
}
