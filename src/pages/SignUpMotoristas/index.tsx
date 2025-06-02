import React, { useState } from "react";
import {
  MotoristasContainer,
  PainelMotoristas,
  FormularioCadastro,
  CampoInput,
  BotaoCadastro,
} from "./styles";
import { Motorista } from "./styles";

const CadastroMotorista: React.FC = () => {
  const [formData, setFormData] = useState<Motorista>({
    nome: "",
    cpf: "",
    cnh: "",
    dataNascimento: "",
    telefone: "",
    email: "",
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
      const response = await fetch("http://localhost:3000/motoristas", {
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

      const novoMotorista = await response.json();
      console.log("Motorista cadastrado com sucesso:", novoMotorista);
      alert("Motorista cadastrado!");

      setFormData({
        nome: "",
        cpf: "",
        cnh: "",
        dataNascimento: "",
        telefone: "",
        email: "",
      });

    } catch (err) {
      console.error("Erro de rede ou exceção:", err);
      alert("Erro de comunicação com o servidor.");
    }
  };

  return (
    <MotoristasContainer>
      <PainelMotoristas>
        <h2>Cadastrar Motorista</h2>
        <FormularioCadastro onSubmit={handleSubmit}>
          <CampoInput
            type="text"
            name="nome"
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <CampoInput
            type="text"
            name="cpf"
            placeholder="CPF"
            value={formData.cpf}
            onChange={handleChange}
            required
          />
          <CampoInput
            type="text"
            name="cnh"
            placeholder="CNH"
            value={formData.cnh}
            onChange={handleChange}
            required
          />
          <CampoInput
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            required
          />
          <CampoInput
            type="tel"
            name="telefone"
            placeholder="Telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
          <CampoInput
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <BotaoCadastro type="submit">Cadastrar</BotaoCadastro>
        </FormularioCadastro>
      </PainelMotoristas>
    </MotoristasContainer>
  );
};

export default CadastroMotorista;
