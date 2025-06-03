import React, { useState } from 'react';
import Logo from "../../assets/Logo.png"
import { SignUpConteiner } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

export function SignUp() {
  const [formData, setFormData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados cadastrados:', formData);
    // adicionar aqui o ip-numerico certo que vocês vao usar
  };

  //  caso forem adicionar mais alguma coisa copiar o de cima e mudar o nome 
  return (
    <SignUpConteiner>
      <form onSubmit={handleSubmit}>
        <img src={Logo} alt="Logo" />
        <h1>Cadastro</h1>

        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          required
        />
       
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Cadastro</button>
      </form>
    </SignUpConteiner>
  );
}
