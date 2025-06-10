import { useState, useEffect } from 'react';
import { Modal } from "../../components/Header/Modal";

import {
  FrotasConteiner,
  VeiculosPainel,
  BarraPesquisa,
  GradeVeiculos,
  CartaoVeiculo,
  AcoesIcones
} from "./styles";
import { Pencil, Trash2 } from "lucide-react";

interface Veiculo {
  id: number;
  placa: string;
  cor: string;
  categoria: string;
  createdAt: string;
  updatedAt: string;
}

export function Frotas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [veiculoEditando, setVeiculoEditando] = useState<Veiculo | null>(null);
  const [formData, setFormData] = useState({ placa: '', codigo: '', cor: '', categoria: '' });
  const [placa, setPlaca] = useState('');
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  const BASE_URL = 'http://localhost:3000/veiculos';

  const consultarVeiculo = async () => {
    try {
      const url = placa ? `${BASE_URL}?placa=${encodeURIComponent(placa)}` : BASE_URL;
      const response = await fetch(url);
      if (!response.ok) {
        const errBody = await response.json().catch(() => ({}));
        throw new Error(errBody.error || response.statusText);
      }
      const data: Veiculo[] = await response.json();
      setVeiculos(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    consultarVeiculo();
  }, []);

  async function handleDelete(id: number) {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      if (response.status === 204) {
        setVeiculos(veiculos.filter(v => v.id !== id));
      } else {
        console.error('Erro ao deletar veículo');
      }
    } catch (err) {
      console.error(err);
    }
  }

  function handleEdit(v: Veiculo) {
    setVeiculoEditando(v);
    setFormData({
      placa: v.placa,
      codigo: v.id.toString(),
      cor: v.cor,
      categoria: v.categoria
    });
    setIsModalOpen(true);
  }

  async function onSubmitEdit(e: React.FormEvent) {
    e.preventDefault();
    if (!veiculoEditando) return;

    const res = await fetch(`${BASE_URL}/${veiculoEditando.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        placa: formData.placa,
        cor: formData.cor,
        categoria: formData.categoria
      }),
    });
    if (!res.ok) throw new Error('Erro ao atualizar');

    const atualizado = await res.json() as Veiculo;
    setVeiculos(vs =>
      vs.map(x => x.id === atualizado.id ? atualizado : x)
    );
    setIsModalOpen(false);
  }

  return (
    <FrotasConteiner>
      <VeiculosPainel>
        <BarraPesquisa>
          <input
            type="text"
            placeholder="Buscar por placa"
            value={placa}
            onChange={e => setPlaca(e.target.value)}
          />
          <button onClick={consultarVeiculo}>
            🔍
          </button>
        </BarraPesquisa>

        <GradeVeiculos>
          {veiculos.length > 0 ? (
            veiculos.map((v) => (
              <CartaoVeiculo key={v.id}>
                <AcoesIcones>
                  <Pencil size={16} onClick={() => handleEdit(v)}
                    style={{
                      background: '#DE562C',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 4
                    }} />
                  <Trash2 size={16} onClick={() => handleDelete(v.id)} />
                </AcoesIcones>
                <p>{v.placa}</p>
                <p>{v.categoria}</p>
                <p>{v.cor}</p>
              </CartaoVeiculo>
            ))
          ) : (
            <p>Nenhum veículo encontrado</p>
          )}
        </GradeVeiculos>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>Editar veículo {formData.placa}</h2>
          <form onSubmit={onSubmitEdit}>
            <label>
              Placa:
              <input
                value={formData.placa}
                onChange={e => setFormData(f => ({ ...f, placa: e.target.value }))}
              />
            </label>
            <label>
              Código do veículo:
              <input
                value={formData.codigo}
                disabled
              />
            </label>
            <label>
              Cor:
              <input
                value={formData.cor}
                onChange={e => setFormData(f => ({ ...f, cor: e.target.value }))}
              />
            </label>
            <label>
              Categoria:
              <input
                value={formData.categoria}
                onChange={e => setFormData(f => ({ ...f, categoria: e.target.value }))}
              />
            </label>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button type="button" onClick={() => setIsModalOpen(false)}>Cancelar</button>
              <button type="submit">Salvar</button>
            </div>
          </form>
        </Modal>
      </VeiculosPainel>
    </FrotasConteiner>
  );
}
