import React, { useState, useEffect } from 'react'
import {
  PainelContainer, PainelTitle,
  ListaManutencoes, CartaoManutencao,
  LinhaInfo, Coluna
} from './style'

interface VeiculoDTO {
  id: number
  nome: string
  codigo: string
  placa: string
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
  const BASE = 'http://localhost:3000/manutencoes'

  useEffect(() => {
    fetch(BASE)
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
  }, [])

  return (
    <PainelContainer>
      <PainelTitle>Manutenções</PainelTitle>
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
    </PainelContainer>
  )
}
