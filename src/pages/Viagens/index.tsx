import React, { useState, useEffect, FormEvent } from "react";
import { Modal } from "../../components/Header/Modal";

import {
  PainelContainer,
  PainelTitle,
  ListaViagens,
  CartaoViagem,
  LinhaInfo,
  Coluna,
  BotaoNovaViagem,
  CampoForm,
  AcoesModal
} from "./style";

interface RegistroViagem {
  id: number;
  dataSaida: string;
  dataVolta: string;
  motorista: string;
  origem: string;
  destino: string;
  veiculo: string;        // nome do veículo
  codigoVeiculo: string;  // código do veículo
}

export function PainelViagens() {
  const [viagens, setViagens] = useState<RegistroViagem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [motoristas, setMotoristas] = useState<{ id: number; label: string }[]>([]);
  const [veiculos,   setVeiculos]   = useState<{ id: number; label: string }[]>([]);

  const [form, setForm] = useState({
  dataSaida:   "",
  dataVolta:   "",
  motoristaId: "",
  veiculoId:   "",
  origem:      "",
  destino:     ""
});

  const BASE_URL = "http://localhost:3000/viagens";

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data: any[]) => {
        const registros: RegistroViagem[] = data.map((item) => ({
          id: item.id,
          dataSaida: new Date(item.dataSaida).toLocaleDateString(),
          dataVolta: new Date(item.dataVolta).toLocaleDateString(),
          motorista: item.motorista.nome,
          origem: item.origem,
          destino: item.destino,
          veiculo: item.veiculo.nome,         // usa o campo nome do veículo
          codigoVeiculo: item.veiculo.codigo, // usa o campo código
        }));
        setViagens(registros);
      })
      .catch((err) => {
        console.error("Erro ao buscar viagens:", err);
      });

    // Dentro do useEffect(() => { … }, []);
    fetch("http://localhost:3000/motoristas")
      .then(res => res.json())
      .then((data: any[]) =>
        setMotoristas(data.map(m => ({ id: m.id, label: m.nome })))
      );

    fetch("http://localhost:3000/veiculos")
      .then(res => res.json())
      .then((data: any[]) =>
        setVeiculos(data.map(v => ({ id: v.id, label: `${v.codigo} – ${v.placa}` })))
      );
    
  }, []); // <-- não esqueça o array de dependências vazio!

  function openModal() {
  setForm({ dataSaida: "", dataVolta: "", motoristaId: "", veiculoId: "", origem: "", destino: "" });
  setIsModalOpen(true);
}
function closeModal() {
  setIsModalOpen(false);
}

function handleSubmit(e: FormEvent) {
  e.preventDefault();
  fetch("http://localhost:3000/viagens", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dataSaida:   form.dataSaida,
      dataVolta:   form.dataVolta || null,
      motoristaId: Number(form.motoristaId),
      veiculoId:   Number(form.veiculoId),
      origem:      form.origem,
      destino:     form.destino
    })
  })
    .then(res => {
      if (!res.ok) throw new Error("Falha ao criar viagem");
      return res.json();
    })
    .then(() => {
      closeModal();
      // Recarrega a lista de viagens
      return fetch("http://localhost:3000/viagens");
    })
    .then(res => res.json())
    .then(data => setViagens(data))
    .catch(console.error);
}


  return (
    <PainelContainer>
      <PainelTitle>Viagens</PainelTitle>
      <BotaoNovaViagem onClick={openModal}>Nova Viagem</BotaoNovaViagem>

      <ListaViagens>
        {viagens.map((registro) => (
          <CartaoViagem key={registro.id}>
            <LinhaInfo>
              <Coluna>
                <span>Saída</span>
                {registro.dataSaida}
              </Coluna>
              <Coluna>
                <span>Volta</span>
                {registro.dataVolta}
              </Coluna>
            </LinhaInfo>

            <LinhaInfo>
              <Coluna>
                <span>Motorista</span>
                {registro.motorista}
              </Coluna>
              <Coluna>
                <span>Origem</span>
                {registro.origem}
              </Coluna>
            </LinhaInfo>

            <LinhaInfo>
              <Coluna>
                <span>Destino</span>
                {registro.destino}
              </Coluna>
            </LinhaInfo>

            <LinhaInfo>
              <Coluna style={{ width: "100%" }}>
                <span>Código do Caminhão</span>
                {registro.codigoVeiculo}
              </Coluna>
            </LinhaInfo>
          </CartaoViagem>
        ))}
      </ListaViagens>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
  <form onSubmit={handleSubmit}>
    {/* Data Saída */}
    <CampoForm>
      <label>Data Saída</label>
      <input
        type="datetime-local"
        name="dataSaida"
        value={form.dataSaida}
        onChange={e => setForm(f => ({ ...f, dataSaida: e.target.value }))}
        required
      />
    </CampoForm>

    {/* Data Volta */}
    <CampoForm>
      <label>Data Volta</label>
      <input
        type="datetime-local"
        name="dataVolta"
        value={form.dataVolta}
        onChange={e => setForm(f => ({ ...f, dataVolta: e.target.value }))}
      />
    </CampoForm>

    {/* Motorista */}
    <CampoForm>
      <label>Motorista</label>
      <select
        name="motoristaId"
        value={form.motoristaId}
        onChange={e => setForm(f => ({ ...f, motoristaId: e.target.value }))}
        required
      >
        <option value="">Selecione...</option>
        {motoristas.map(m => (
          <option key={m.id} value={m.id}>{m.label}</option>
        ))}
      </select>
    </CampoForm>

    {/* Veículo */}
    <CampoForm>
      <label>Veículo</label>
      <select
        name="veiculoId"
        value={form.veiculoId}
        onChange={e => setForm(f => ({ ...f, veiculoId: e.target.value }))}
        required
      >
        <option value="">Selecione...</option>
        {veiculos.map(v => (
          <option key={v.id} value={v.id}>{v.label}</option>
        ))}
      </select>
    </CampoForm>

    {/* Origem */}
    <CampoForm>
      <label>Origem</label>
      <input
        type="text"
        name="origem"
        value={form.origem}
        onChange={e => setForm(f => ({ ...f, origem: e.target.value }))}
        required
      />
    </CampoForm>

    {/* Destino */}
    <CampoForm>
      <label>Destino</label>
      <input
        type="text"
        name="destino"
        value={form.destino}
        onChange={e => setForm(f => ({ ...f, destino: e.target.value }))}
        required
      />
    </CampoForm>

    {/* Ações */}
    <AcoesModal>
      <button type="button" onClick={closeModal}>Cancelar</button>
      <button type="submit">Salvar</button>
    </AcoesModal>
  </form>
</Modal>

    </PainelContainer>
  );
}
