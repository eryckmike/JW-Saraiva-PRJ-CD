import React, { useState } from "react";
import { 
  VeiculosContainer,
  PainelVeiculos, 
  FormularioCadastro, 
  CampoInput, 
  BotaoCadastro 
} from "./styles";
import { Veiculo } from "./styles";

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
