import React, { useState, FormEvent } from "react";
import {
  PainelContainer,
  PainelTitle,
  ListaAbastecimentos,
  CartaoAbastecimento,
  LinhaInfo,
  Coluna,
  PainelHeader,
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalForm,
  ModalActions
} from "./style";
import { Pencil, Trash2, Plus } from "lucide-react";

interface RegistroAbastecimento {
  id: number;
  data: string;
  horario: string;
  caminhao: string;
  motorista: string;
  valor: string;
  local: string;
}

// omitimos id no form
type AbastForm = Omit<RegistroAbastecimento, "id">;

export function PainelAbastecimentos() {
  const [abast, setAbast] = useState<RegistroAbastecimento[]>([
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
      local: "Aeroporto Internacional Pinto Martins - FOR"
    },
    {
      id: 3,
      data: "2025-05-30",
      horario: "14:30",
      caminhao: "DEF-9012",
      motorista: "João Guilherme",
      valor: "R$ 1220,00",
      local: "Aeroporto Internacional do Recife / Guararapes - REC"
    }
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [form, setForm] = useState<AbastForm>({
    data: "",
    horario: "",
    caminhao: "",
    motorista: "",
    valor: "",
    local: ""
  });

  const openAdd = () => {
    setForm({ data:"", horario:"", caminhao:"", motorista:"", valor:"", local:"" });
    setEditingId(null);
    setIsAdding(true);
  };
  const openEdit = (r: RegistroAbastecimento) => {
    const { id, ...rest } = r;
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
      setAbast(prev =>
        prev.map(it => (it.id === editingId ? { id: editingId, ...form } : it))
      );
    } else {
      const nextId = Math.max(0, ...abast.map(it => it.id)) + 1;
      setAbast(prev => [...prev, { id: nextId, ...form }]);
    }
    closeModal();
  }

  const handleDelete = (id: number) => {
    setAbast(prev => prev.filter(it => it.id !== id));
  };

  return (
    <PainelContainer>
      <PainelHeader>
        <PainelTitle>Abastecimentos</PainelTitle>
        <button onClick={openAdd}><Plus size={18} /></button>
      </PainelHeader>

      <ListaAbastecimentos>
        {abast.map(r => (
          <CartaoAbastecimento key={r.id}>
            <LinhaInfo>
              <Coluna><span>Data</span>{r.data}</Coluna>
              <Coluna><span>Horário</span>{r.horario}</Coluna>
              <Coluna><span>Valor</span>{r.valor}</Coluna>
            </LinhaInfo>
            <LinhaInfo>
              <Coluna><span>Caminhão</span>{r.caminhao}</Coluna>
              <Coluna><span>Motorista</span>{r.motorista}</Coluna>
            </LinhaInfo>
            <LinhaInfo>
              <Coluna width="100%"><span>Local</span>{r.local}</Coluna>
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
          </CartaoAbastecimento>
        ))}
      </ListaAbastecimentos>

      {(isAdding || editingId !== null) && (
        <Overlay>
          <ModalContainer>
            <ModalHeader>
              <h2>{editingId !== null ? "Editar Abastecimento" : "Novo Abastecimento"}</h2>
              <button onClick={closeModal}>×</button>
            </ModalHeader>
            <ModalForm onSubmit={handleSubmit}>
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
                Caminhão
                <input
                  required
                  value={form.caminhao}
                  onChange={e => setForm(f => ({ ...f, caminhao: e.target.value }))}
                />
              </label>
              <label>
                Motorista
                <input
                  required
                  value={form.motorista}
                  onChange={e => setForm(f => ({ ...f, motorista: e.target.value }))}
                />
              </label>
              <label>
                Local
                <input
                  required
                  value={form.local}
                  onChange={e => setForm(f => ({ ...f, local: e.target.value }))}
                />
              </label>
              <ModalActions>
                <button type="button" className="cancel" onClick={closeModal}>Cancelar</button>
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
