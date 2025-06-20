import React, { useState, useEffect } from 'react';
import { Modal } from '../../components/Header/Modal';
import {
  MotoristasContainer,
  PainelMotoristas,
  BarraPesquisa,
  GradeMotoristas,
  CartaoMotorista,
  AcoesIcones
} from './styles';
import { Pencil, Trash2 } from 'lucide-react';

interface MotoristaDTO {
  id: number;
  nome: string;
  cpf: string;
  cnh: string;
  telefone: string;
  email: string;
}

export function Motoristas() {
  const BASE_URL = 'http://localhost:3000/motoristas';

 
  const [motoristas, setMotoristas]               = useState<MotoristaDTO[]>([]);
  const [filtro, setFiltro]                       = useState('');
  const [isModalOpen, setIsModalOpen]             = useState(false);
  const [motoristaEditando, setMotoristaEditando] = useState<MotoristaDTO | null>(null);
  const [formData, setFormData] = useState({
    nome:     '',
    cpf:      '',
    cnh:      '',
    telefone: '',
    email:    ''
  });

  useEffect(() => {
    (async () => {
      try {
        const res  = await fetch(BASE_URL);
        if (!res.ok) throw new Error('Erro ao buscar motoristas');
        const data = (await res.json()) as MotoristaDTO[];
        setMotoristas(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);


  const motoristasFiltrados = motoristas.filter(m =>
    m.nome.toLowerCase().includes(filtro.toLowerCase()) ||
    m.id.toString().includes(filtro)
  );


    async function handleDelete(id: number) {
      try {
        const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
        if (!res.ok) {
          console.error('Erro ao deletar motorista, status:', res.status);
          return;
        }
 
        setMotoristas(prev => prev.filter(m => m.id !== id));
      } catch (err) {
        console.error('Erro ao deletar motorista:', err);
      }
    }


  function handleEdit(m: MotoristaDTO) {
    setMotoristaEditando(m);
    setFormData({
      nome:     m.nome,
      cpf:      m.cpf,
      cnh:      m.cnh,
      telefone: m.telefone,
      email:    m.email
    });
    setIsModalOpen(true);
  }

  
  async function onSubmitEdit(e: React.FormEvent) {
    e.preventDefault();
    if (!motoristaEditando) return;

    try {
      const res = await fetch(`${BASE_URL}/${motoristaEditando.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Falha ao atualizar motorista');

      const atualizado = (await res.json()) as MotoristaDTO;
      setMotoristas(prev =>
        prev.map(m => (m.id === atualizado.id ? atualizado : m))
      );
      setIsModalOpen(false);
      setMotoristaEditando(null);
    } catch (err) {
      console.error('Erro ao atualizar motorista:', err);
    }
  }

  return (
    <MotoristasContainer>
      <PainelMotoristas>
      
        <BarraPesquisa>
          <input
            type="text"
            placeholder="Buscar motorista…"
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
          />
        </BarraPesquisa>

  
        <GradeMotoristas>
          {motoristasFiltrados.length > 0 ? (
            motoristasFiltrados.map(m => (
              <CartaoMotorista key={m.id}>
                <p><strong>{m.nome}</strong></p>
                <p>CPF: {m.cpf}</p>
                <p>CNH: {m.cnh}</p>
                <p>Telefone: {m.telefone}</p>
                <p>Email: {m.email}</p>
                <AcoesIcones>
                  <Pencil  size={16} onClick={() => handleEdit(m)} />
                  <Trash2 size={16} onClick={() => handleDelete(m.id)} />
                </AcoesIcones>
              </CartaoMotorista>
            ))
          ) : (
            <p>Nenhum motorista encontrado</p>
          )}
        </GradeMotoristas>
      </PainelMotoristas>


      {isModalOpen && motoristaEditando && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2>Editar Motorista</h2>
          <form
            onSubmit={onSubmitEdit}
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <label>
              Nome:
              <input
                value={formData.nome}
                onChange={e => setFormData(f => ({ ...f, nome: e.target.value }))}
              />
            </label>
            <label>
              CPF:
              <input
                value={formData.cpf}
                onChange={e => setFormData(f => ({ ...f, cpf: e.target.value }))}
              />
            </label>
            <label>
              CNH:
              <input
                value={formData.cnh}
                onChange={e => setFormData(f => ({ ...f, cnh: e.target.value }))}
              />
            </label>
            <label>
              Telefone:
              <input
                value={formData.telefone}
                onChange={e => setFormData(f => ({ ...f, telefone: e.target.value }))}
              />
            </label>
            <label>
              Email:
              <input
                value={formData.email}
                onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
              />
            </label>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button type="button" onClick={() => setIsModalOpen(false)}>
                Cancelar
              </button>
              <button type="submit">Salvar</button>
            </div>
          </form>
        </Modal>
      )}
    </MotoristasContainer>
  );
}
