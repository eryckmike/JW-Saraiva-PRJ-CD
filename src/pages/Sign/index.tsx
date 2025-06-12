import { useState } from 'react';
import { SignContainer } from './styles';

export function Sign({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setErro('');
    try {
      const res = await fetch('http://localhost:3000/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) {
        setErro(data.error || 'Erro ao autenticar');
        return;
      }
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      onLogin && onLogin();
    } catch (err) {
      setErro('Erro de conexão');
    }
  }

  return (
    <SignContainer>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" type="password" />
        <button type="submit">Entrar</button>
        {erro && <div style={{ color: 'red' }}>{erro}</div>}
      </form>
    </SignContainer>
  );
}
