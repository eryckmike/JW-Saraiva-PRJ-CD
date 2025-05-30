import React, { useState } from "react";
import { 
  MotoristasContainer, 
  BarraLateral, 
  PainelMotoristas, 
  FormularioCadastro, 
  CampoInput, 
  BotaoCadastro 
} from "./styles";
import { Motorista } from "./types";

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  };

  return (
    <MotoristasContainer>
      <BarraLateral>
        <ul>
          <li>Motoristas</li>
          <li>Viagens</li>
          <li>Entradas/Saídas</li>
          <li style={{ color: "#DE562C" }}>Cadastrar</li>
        </ul>
      </BarraLateral>

      <PainelMotoristas>
        <h2>Cadastrar Motorista</h2>
        <FormularioCadastro onSubmit={handleSubmit}>
          <CampoInput type="text" name="nome" placeholder="Nome" onChange={handleChange} />
          <CampoInput type="text" name="cpf" placeholder="CPF" onChange={handleChange} />
          <CampoInput type="text" name="cnh" placeholder="CNH" onChange={handleChange} />
          <CampoInput type="date" name="dataNascimento" onChange={handleChange} />
          <CampoInput type="tel" name="telefone" placeholder="Telefone" onChange={handleChange} />
          <CampoInput type="email" name="email" placeholder="Email" onChange={handleChange} />
          <BotaoCadastro type="submit">Cadastrar</BotaoCadastro>
        </FormularioCadastro>
      </PainelMotoristas>
    </MotoristasContainer>
  );
};

export default CadastroMotorista;
