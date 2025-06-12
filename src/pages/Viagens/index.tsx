import { useState, useEffect, FormEvent } from "react";
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
  AcoesModal,
  AcoesIcones
} from "./style";
import { Trash2 } from "lucide-react";

interface RegistroViagem {
  id: number;
  dataSaida: string;
  dataVolta: string;
  motorista: string;
  origem: string;
  destino: string;
  veiculo: string;
  codigoVeiculo: string;
}

export function PainelViagens() {
  const BASE_URL = "http://localhost:3000/viagens";

  // estados
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

  // 1) carrega viagens, motoristas e veículos
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then((data: any[]) => {
        const registros = data.map(item => ({
          id: item.id,
          dataSaida: new Date(item.dataSaida).toLocaleDateString(),
          dataVolta: new Date(item.dataVolta).toLocaleDateString(),
          motorista: item.motorista.nome,
          origem: item.origem,
          destino: item.destino,
          veiculo: item.veiculo.nome,
          codigoVeiculo: item.veiculo.codigo
        }));
        setViagens(registros);
      })
      .catch(console.error);

    fetch("http://localhost:3000/motoristas")
      .then(res => res.json())
      .then((data: any[]) =>
        setMotoristas(data.map(m => ({ id: m.id, label: m.nome })))
      )
      .catch(console.error);

    fetch("http://localhost:3000/veiculos")
      .then(res => res.json())
      .then((data: any[]) =>
        setVeiculos(data.map(v => ({ id: v.id, label: `${v.codigo} – ${v.placa}` })))
      )
      .catch(console.error);
  }, []);

  // 2) abrir/fechar modal
  function openModal() {
    setForm({ dataSaida: "", dataVolta: "", motoristaId: "", veiculoId: "", origem: "", destino: "" });
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  // 3) criar nova viagem
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    fetch(BASE_URL, {
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
        return fetch(BASE_URL);
      })
      .then(res => res.json())
      .then((data: any[]) => {
        const registros = data.map(item => ({
          id: item.id,
          dataSaida: new Date(item.dataSaida).toLocaleDateString(),
          dataVolta: new Date(item.dataVolta).toLocaleDateString(),
          motorista: item.motorista.nome,
          origem: item.origem,
          destino: item.destino,
          veiculo: item.veiculo.nome,
          codigoVeiculo: item.veiculo.codigo
        }));
        setViagens(registros);
      })
      .catch(console.error);
  }

  // 4) apagar viagem
  async function handleDelete(id: number) {
    try {
      const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) {
        console.error("Erro ao deletar viagem, status:", res.status);
        return;
      }
      setViagens(prev => prev.filter(v => v.id !== id));
    } catch (err) {
      console.error("Erro ao deletar viagem:", err);
    }
  }

  return (
    <PainelContainer>
      <PainelTitle>Viagens</PainelTitle>
      <BotaoNovaViagem onClick={openModal}>Nova Viagem</BotaoNovaViagem>

      <ListaViagens>
        {viagens.map(registro => (
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
              <Coluna>
                <span>Código do Caminhão</span>
                {registro.codigoVeiculo}
              </Coluna>
              {/* ícones de ação */}
              <Coluna style={{ display: "flex", justifyContent: "flex-end" }}>
                <AcoesIcones>
                  <Trash2
                    size={16}
                    color="#DE562C"
                    onClick={() => handleDelete(registro.id)}
                    style={{ cursor: "pointer" }}
                  />
                </AcoesIcones>
              </Coluna>
            </LinhaInfo>
          </CartaoViagem>
        ))}
      </ListaViagens>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <form onSubmit={handleSubmit} style={{
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
        }}>
          <h2 style={{ margin:0, marginBottom:16, color:'#DE562C', fontWeight:600, fontSize:22 }}>Nova Viagem</h2>

          <CampoForm>
            <label>Data Saída</label>
            <input
              type="datetime-local"
              value={form.dataSaida}
              onChange={e => setForm(f => ({ ...f, dataSaida: e.target.value }))}
              required
            />
          </CampoForm>

          <CampoForm>
            <label>Data Volta</label>
            <input
              type="datetime-local"
              value={form.dataVolta}
              onChange={e => setForm(f => ({ ...f, dataVolta: e.target.value }))}
            />
          </CampoForm>

          <CampoForm>
            <label>Motorista</label>
            <select
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

          <CampoForm>
            <label>Veículo</label>
            <select
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

          <CampoForm>
            <label>Origem</label>
            <input
              type="text"
              value={form.origem}
              onChange={e => setForm(f => ({ ...f, origem: e.target.value }))}
              required
            />
          </CampoForm>

          <CampoForm>
            <label>Destino</label>
            <input
              type="text"
              value={form.destino}
              onChange={e => setForm(f => ({ ...f, destino: e.target.value }))}
              required
            />
          </CampoForm>

          <AcoesModal>
            <button type="button" onClick={closeModal}>Cancelar</button>
            <button type="submit">Salvar</button>
          </AcoesModal>

        </form>
      </Modal>
    </PainelContainer>
  );
}
