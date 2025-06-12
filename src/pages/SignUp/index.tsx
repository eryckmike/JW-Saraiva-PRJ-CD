import { useState } from 'react';

export function SignUp({ onSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setErro('');
    try {
      const res = await fetch('http://localhost:3000/auth/signup',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        setErro(data.error || 'Erro ao cadastrar');
        return;
      }
      onSuccess && onSuccess();
    } catch (err) {
      setErro('Erro de conexão');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" type="password" />
      <button type="submit">Cadastrar</button>
      {erro && <div style={{ color: 'red' }}>{erro}</div>}
    </form>
  );
}
