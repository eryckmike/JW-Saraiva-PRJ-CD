import React, { useState, useEffect, FormEvent } from 'react'
import { Modal } from '../../components/Header/Modal'
import {
  PainelContainer, PainelTitle,
  ListaManutencoes, CartaoManutencao,
  LinhaInfo, Coluna,
  BotaoNovaManutencao
} from './style'

interface VeiculoDTO {
  id: number
  placa: string
  cor: string
  categoria: string
}

interface ManutencaoDTO {
  id: number
  dataEntrada: string
  dataSaidaEstimad: string
  motivo: string
  veiculo: VeiculoDTO
}

interface RegistroManutencao {
  id: number
  dataEntrada: string
  dataSaidaEstimad: string
  motivo: string
  veiculoNome: string
  veiculoCodigo: string
  veiculoPlaca: string
}


export function PainelManutencoes() {
  const [manut, setManut] = useState<RegistroManutencao[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

// lista de veículos para o select
const [veiculos, setVeiculos] = useState<{ id: number; label: string }[]>([])

// dados do formulário
const [form, setForm] = useState({
  dataEntrada:      '',
  dataSaidaEstimad: '',
  motivo:           '',
  veiculoId:        ''
})
  const BASE_URL= 'http://localhost:3000/manutencoes'

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json() as Promise<ManutencaoDTO[]>)
      .then(data => {
        setManut(
          data.map(m => ({
            id:               m.id,
            dataEntrada:      new Date(m.dataEntrada).toLocaleDateString(),
            dataSaidaEstimad: new Date(m.dataSaidaEstimad).toLocaleDateString(),
            motivo:           m.motivo,
            veiculoNome:      m.veiculo.nome,
            veiculoCodigo:    m.veiculo.codigo,
            veiculoPlaca:     m.veiculo.placa
          }))
        )
      })
      .catch(console.error)
      fetch('http://localhost:3000/veiculos')
  .then(res => res.json() as Promise<VeiculoDTO[]>)
  .then((data: any[]) =>
    setVeiculos(
      data.map(v => ({ id: v.id, label: v.placa }))
    )
  )
  .catch(err => console.error('Erro ao buscar veículos:', err))

  }, [])
  function openModal() {
  // limpa o formulário e abre
  setForm({
    dataEntrada:      '',
    dataSaidaEstimad: '',
    motivo:           '',
    veiculoId:        ''
  })
  setIsModalOpen(true)
}
function closeModal() {
  setIsModalOpen(false)
}
function handleSubmit(e: FormEvent) {
  e.preventDefault()
  fetch('http://localhost:3000/manutencoes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      dataEntrada:      form.dataEntrada,
      dataSaidaEstimad: form.dataSaidaEstimad || null,
      motivo:           form.motivo,
      veiculoId:        Number(form.veiculoId)
    })
  })
    .then(res => {
      if (!res.ok) throw new Error('Falha ao criar manutenção')
      return res.json()
    })
    .then(() => {
      closeModal()
      // recarrega lista
      return fetch(BASE_URL)
    })
    .then(res => res.json() as Promise<ManutencaoDTO[]>)
    .then(data => {
      setManut(data.map(m => ({
        id:               m.id,
        dataEntrada:      new Date(m.dataEntrada).toLocaleDateString(),
        dataSaidaEstimad: m.dataSaidaEstimad
                            ? new Date(m.dataSaidaEstimad).toLocaleDateString()
                            : '-',
        motivo:           m.motivo,
        veiculoNome:      m.veiculo.nome,
        veiculoCodigo:    m.veiculo.codigo,
        veiculoPlaca:     m.veiculo.placa
      })))
    })
    .catch(console.error)
}


  return (
    <PainelContainer>
      <PainelTitle>Manutenções</PainelTitle>
      <BotaoNovaManutencao onClick={openModal}>
         Nova Manutenção
      </BotaoNovaManutencao>

      <ListaManutencoes>
        {manut.map(r => (
          <CartaoManutencao key={r.id}>
            <LinhaInfo>
              <Coluna><span>Entrada</span>{r.dataEntrada}</Coluna>
              <Coluna><span>Saída Estimada</span>{r.dataSaidaEstimad}</Coluna>
            </LinhaInfo>
            <LinhaInfo>
              <Coluna><span>Veículo</span>{r.veiculoNome}</Coluna>
              <Coluna><span>Código</span>{r.veiculoCodigo}</Coluna>
            </LinhaInfo>
            <LinhaInfo>
              <Coluna><span>Placa</span>{r.veiculoPlaca}</Coluna>
            </LinhaInfo>
            <LinhaInfo>
              <Coluna style={{ width: '100%' }}>
                <span>Motivo</span>{r.motivo}
              </Coluna>
            </LinhaInfo>
          </CartaoManutencao>
        ))}
      </ListaManutencoes>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <form
            onSubmit={handleSubmit}
            style={{
              background: '#161b22',
              color: '#E8EBED',
              borderRadius: 16,
              padding: 32,
              minWidth: 340,
              boxShadow: '0 4px 32px #0008',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              maxWidth: 420,
            }}
          >
            <h2 style={{margin:0, marginBottom: 16, color:'#DE562C', fontWeight:600, fontSize:22}}>Nova Manutenção</h2>
            <label style={{fontWeight:500, fontSize:15, marginBottom: 4}}>Data Entrada:
              <input
                type="datetime-local"
                value={form.dataEntrada}
                onChange={e => setForm(f => ({ ...f, dataEntrada: e.target.value }))}
                required
                style={{ width: '100%', marginTop: 4, padding: 10, borderRadius: 8, border: '1px solid #30363d', background: '#0d1117', color: '#E8EBED', fontSize: 15 }}
              />
            </label>
            <label style={{fontWeight:500, fontSize:15, marginBottom: 4}}>Data Saída Estimada:
              <input
                type="datetime-local"
                value={form.dataSaidaEstimad}
                onChange={e => setForm(f => ({ ...f, dataSaidaEstimad: e.target.value }))}
                style={{ width: '100%', marginTop: 4, padding: 10, borderRadius: 8, border: '1px solid #30363d', background: '#0d1117', color: '#E8EBED', fontSize: 15 }}
              />
            </label>
            <label style={{fontWeight:500, fontSize:15, marginBottom: 4}}>Motivo:
              <input
                type="text"
                value={form.motivo}
                onChange={e => setForm(f => ({ ...f, motivo: e.target.value }))}
                required
                style={{ width: '100%', marginTop: 4, padding: 10, borderRadius: 8, border: '1px solid #30363d', background: '#0d1117', color: '#E8EBED', fontSize: 15 }}
              />
            </label>
            <label style={{fontWeight:500, fontSize:15, marginBottom: 4}}>Veículo:
              <select
                value={form.veiculoId}
                onChange={e => setForm(f => ({ ...f, veiculoId: e.target.value }))}
                required
                style={{ width: '100%', marginTop: 4, padding: 10, borderRadius: 8, border: '1px solid #30363d', background: '#0d1117', color: '#E8EBED', fontSize: 15 }}
              >
                <option value="">Selecione...</option>
                {veiculos.map(v => (
                  <option key={v.id} value={v.id}>{v.label}</option>
                ))}
              </select>
            </label>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, marginTop: 10 }}>
              <button type="button" onClick={closeModal} style={{ background: '#30363d', color: '#E8EBED', border: 'none', borderRadius: 6, padding: '8px 18px', fontWeight: 500, fontSize: 15, cursor: 'pointer' }}>Cancelar</button>
              <button type="submit" style={{ background: '#DE562C', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer', boxShadow: '0 2px 8px #de562c22' }}>Salvar</button>
            </div>
          </form>
        </Modal>

    </PainelContainer>
  )
}
