import React, { useState } from "react";
import { 
  VeiculosContainer, 
  BarraLateral, 
  PainelVeiculos, 
  FormularioCadastro, 
  CampoInput, 
  BotaoCadastro 
} from "./styles";
import { Veiculo } from "./types";

const CadastroVeiculo: React.FC = () => {
  const [formData, setFormData] = useState<Veiculo>({
    placa: "",
    codigoVeiculo: "",
    cor: "",
    categoria: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do veículo enviados:", formData);
  };

  return (
    <VeiculosContainer>
      <BarraLateral>
        <ul>
          <li>Veículos</li>
          <li>Frotas</li>
          <li>Manutenção</li>
          <li 
            onClick={() => console.log("Tela de Cadastro de Veículo")}
            style={{ cursor: "pointer", color: "#DE562C" }}>
            Cadastrar
          </li>
        </ul>
      </BarraLateral>

      <PainelVeiculos>
        <h2>Cadastrar Veículo</h2>
        <FormularioCadastro onSubmit={handleSubmit}>
          <CampoInput type="text" name="placa" placeholder="Placa" onChange={handleChange} />
          <CampoInput type="text" name="codigoVeiculo" placeholder="Código do Veículo" onChange={handleChange} />
          <CampoInput type="text" name="cor" placeholder="Cor" onChange={handleChange} />
          <CampoInput type="text" name="categoria" placeholder="Categoria" onChange={handleChange} />
          <BotaoCadastro type="submit">Cadastrar</BotaoCadastro>
        </FormularioCadastro>
      </PainelVeiculos>
    </VeiculosContainer>
  );
};

export default CadastroVeiculo;
