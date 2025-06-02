import React, { useState } from "react";
import {
  VeiculosContainer,
  PainelVeiculos,
  FormularioCadastro,
  CampoInput,
  BotaoCadastro,
} from "./styles";
import { Veiculos } from "./styles";

const CadastroVeiculo: React.FC = () => {
  const [formData, setFormData] = useState<Veiculos>({
    placa:"",
    codigoVeiculo:"",
    cor:"",
    categoria:"",
    
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/veiculos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errData = await response.json();
        console.error("Erro ao cadastrar:", errData);
        alert("Falha ao cadastrar. Veja console para detalhes.");
        return;
      }

      const novoVeiculo = await response.json();
      console.log("Veiculo cadastrado com sucesso:", novoVeiculo);
      alert("Veiculo cadastrado!");

      setFormData({
        placa:"",
        codigoVeiculo:"",
        cor:"",
        categoria:"",
      });

    } catch (err) {
      console.error("Erro de rede ou exceção:", err);
      alert("Erro de comunicação com o servidor.");
    }
  };

  return (
    <VeiculosContainer>
      <PainelVeiculos>
        <h2>Cadastrar Veiculo</h2>
        <FormularioCadastro onSubmit={handleSubmit}>
          <CampoInput
            type="text"
            name="placa"
            placeholder="Placa"
            value={formData.placa}
            onChange={handleChange}
            required
          />
          <CampoInput
            type="text"
            name="codigoVeiculo"
            placeholder="codigoVeiculo"
            value={formData.codigoVeiculo}
            onChange={handleChange}
            required
          />
          <CampoInput
            type="text"
            name="cor"
            placeholder="cor"
            value={formData.cor}
            onChange={handleChange}
            required
          />
          <CampoInput
            type="text"
            name="categoria"
            placeholder="categoria"
            value={formData.categoria}
            onChange={handleChange}
            required
          />
          <BotaoCadastro type="submit">Cadastrar</BotaoCadastro>
        </FormularioCadastro>
      </PainelVeiculos>
    </VeiculosContainer>
  );
};

export default CadastroVeiculo;
