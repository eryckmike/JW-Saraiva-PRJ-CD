import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import {
  SignContainer,
  SignContent,
  SignHeader,
  Form,
  FormGroup,
  Label,
  Input,
  RememberMeGroup,
  RememberMeLabel,
  ForgotPasswordLink,
  SubmitButton,
  SignUpLink
} from './styles';
import styled from 'styled-components';

const LogoImg = styled.img`
  width: 120px;
  display: block;
  margin: 0 auto 18px auto;
  filter: drop-shadow(0 2px 8px #e8ebed);
`;

export function Sign() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {

      console.log('Login data:', formData);
      // usa o db para lembrar 
      const storage = formData.rememberMe ? localStorage : sessionStorage;
      storage.setItem('user', JSON.stringify({ email: formData.email }));
      // Redirecio para home
      window.location.href = '/';
    } catch (error) {
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <SignContainer>
      <SignContent>
        <LogoImg src={Logo} alt="Logo Grupo JW Saraiva" />
        <SignHeader>
          <h1>Bem-vindo</h1>
          <p>Faça login para acessar sua conta</p>
        </SignHeader>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </FormGroup>
          <RememberMeGroup>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
            />
            <RememberMeLabel htmlFor="rememberMe">
              Lembrar-se de mim
            </RememberMeLabel>
          </RememberMeGroup>
          <ForgotPasswordLink to="/forgot-password">
            Esqueceu sua senha?
          </ForgotPasswordLink>
          <SubmitButton type="submit">
            Entrar
          </SubmitButton>
          <SignUpLink>
            Não tem uma conta? <Link to="/signup">Cadastre-se</Link>
          </SignUpLink>
        </Form>
      </SignContent>
    </SignContainer>
  );
}