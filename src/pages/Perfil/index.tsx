import { PerfilContainer, PerfilInfoContainer, FotoPerfil, FormPerfil, InputGroup, Label, Input, SaveButton } from "./styles";
import { useState } from "react";

export function Perfil() {
  const [form, setForm] = useState({
    nome: "João Pedro",
    email: "joao@email.com",
    telefone: "(85) 99999-9999",
    endereco: "Rua Exemplo, 123",
    foto: null as File | null,
    fotoUrl: "/default-avatar.png"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm({
        ...form,
        foto: e.target.files[0],
        fotoUrl: URL.createObjectURL(e.target.files[0])
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para a API
    alert("Perfil atualizado com sucesso!");
  };

  return (
    <PerfilContainer>
      <PerfilInfoContainer>
        <FormPerfil onSubmit={handleSubmit}>
          <FotoPerfil>
            <img src={form.fotoUrl} alt="Foto de perfil" />
            <label htmlFor="foto-upload" className="foto-label">Alterar foto</label>
            <input id="foto-upload" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFoto} />
          </FotoPerfil>
          <InputGroup>
            <Label>Nome completo</Label>
            <Input name="nome" value={form.nome} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label>Email</Label>
            <Input name="email" value={form.email} onChange={handleChange} required type="email" />
          </InputGroup>
          <InputGroup>
            <Label>Telefone</Label>
            <Input name="telefone" value={form.telefone} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label>Endereço</Label>
            <Input name="endereco" value={form.endereco} onChange={handleChange} required />
          </InputGroup>
          <SaveButton type="submit">Salvar Alterações</SaveButton>
        </FormPerfil>
      </PerfilInfoContainer>
    </PerfilContainer>
  );
}