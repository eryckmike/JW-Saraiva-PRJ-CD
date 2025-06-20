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
  placaVeiculo: string;
  bloqueado: boolean;
}

export function PainelViagens() {
  const [viagens, setViagens] = useState<RegistroViagem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [desbloqueando, setDesbloqueando] = useState<number | null>(null);
  const [checklist, setChecklist] = useState("");
  const [motoristas, setMotoristas] = useState<{ id: number; label: string }[]>([]);
  const [veiculos, setVeiculos] = useState<{ id: number; label: string }[]>([]);
  const [form, setForm] = useState({
    dataSaida: "",
    dataVolta: "",
    motoristaId: "",
    veiculoId: "",
    origem: "",
    destino: ""
  });

  const BASE_URL = "http://localhost:3000/viagens";

  function diasRestantes(dataSaida: string) {
  const MS_DIA = 24 * 60 * 60 * 1000;
  const saida = new Date(dataSaida).getTime();
  const fim = saida + 30 * MS_DIA;
  const diff = fim - Date.now();
  if (diff <= 0) return "Prazo excedido!";
  const dias = Math.floor(diff / MS_DIA);
  if (dias > 0) return `${dias} dias restantes`;
  return "Últimas horas!";
}



  function loadViagens() {
    fetch(BASE_URL)
      .then(res => res.json())
      .then((data: any[]) => {
        const registros = data.map(item => ({
          id: item.id,
          dataSaida: item.dataSaida,
          dataVolta: item.dataVolta,
          motorista: item.motorista.nome,
          origem: item.origem,
          destino: item.destino,
          veiculo: item.veiculo.nome,
          placaVeiculo: item.veiculo.placa,
          bloqueado: !!item.veiculo.bloqueado,
        }));
        setViagens(registros);
      })
      .catch(console.error);
  }

  useEffect(() => {
    loadViagens();

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

  function openModal() {
    setForm({ dataSaida: "", dataVolta: "", motoristaId: "", veiculoId: "", origem: "", destino: "" });
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dataSaida: form.dataSaida,
        dataVolta: form.dataVolta || null,
        motoristaId: Number(form.motoristaId),
        veiculoId: Number(form.veiculoId),
        origem: form.origem,
        destino: form.destino
      })
    })
      .then(res => {
        if (!res.ok) throw new Error("Falha ao criar viagem");
        return res.json();
      })
      .then(() => {
        closeModal();
        loadViagens();
      })
      .catch(console.error);
  }

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

  async function handleDesbloqueio(veiculoId: number, checklist: string) {
    await fetch(`http://localhost:3000/veiculos/${veiculoId}/desbloquear`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checklist }), 
    });
    setDesbloqueando(null);
    setChecklist("");
    loadViagens();
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
                {registro.dataSaida
                  ? new Date(registro.dataSaida).toLocaleDateString()
                  : "--"}
              </Coluna>
              <Coluna>
                <span>Volta</span>
                {registro.dataVolta
                  ? new Date(registro.dataVolta).toLocaleDateString()
                  : "--"}
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
                <span>Placa</span>
                {registro.placaVeiculo}
              </Coluna>
              <Coluna style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>

                {registro.bloqueado ? (
                  <>
                    <span style={{ color: 'red', fontWeight: 600, marginBottom: 8 }}>Bloqueado</span>
                    <button
                      style={{
                        background: "#DE562C",
                        color: "#fff",
                        border: "none",
                        borderRadius: 6,
                        padding: "4px 14px",
                        marginBottom: 8,
                        cursor: "pointer",
                      }}
                      onClick={() => setDesbloqueando(registro.id)}
                    >
                      Desbloquear
                    </button>
                    {desbloqueando === registro.id && (
                      <form
                        onSubmit={e => {
                          e.preventDefault();
                          handleDesbloqueio(registro.id, checklist);
                        }}
                        style={{ marginTop: 8, width: 160 }}
                      >
                        <textarea
                          required
                          placeholder="Checklist de retorno"
                          value={checklist}
                          onChange={e => setChecklist(e.target.value)}
                          style={{ width: '100%', height: 45, marginBottom: 8, borderRadius: 6, border: '1px solid #ccc', padding: 8, fontSize: 14 }}
                        />
                        <button
                          type="submit"
                          style={{
                            padding: '5px 12px',
                            background: '#0d1117',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 6,
                            fontWeight: 600,
                            fontSize: 14
                          }}
                        >
                          Enviar
                        </button>
                      </form>
                    )}
                  </>
                ) : (
                  <span style={{ color: '#3b82f6', fontWeight: 500 }}>
                    {diasRestantes(registro.dataSaida)}
                  </span>
                )}
                <AcoesIcones>
                  <Trash2
                    size={16}
                    color="#DE562C"
                    onClick={() => handleDelete(registro.id)}
                    style={{ cursor: "pointer", marginTop: 10 }}
                  />
                </AcoesIcones>
              </Coluna>
            </LinhaInfo>
          </CartaoViagem>
        ))}
      </ListaViagens>

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
          <h2 style={{ margin: 0, marginBottom: 16, color: '#DE562C', fontWeight: 600, fontSize: 22 }}>
            Nova Viagem
          </h2>

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
