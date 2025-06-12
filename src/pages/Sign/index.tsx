import { useState, FormEvent } from 'react';
import { SignContainer, SignContent } from './styles';
import Logo from '../../assets/Logo.png';

interface SignProps {
  onLogin?: () => void;
}

export function Sign({ onLogin }: SignProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
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
      <SignContent>
        <img src={Logo} alt="Logo JW Saraiva" style={{ width: 80, margin: '0 auto 18px', display: 'block' }} />
        <h1>Bem-vindo</h1>
        <p style={{ textAlign: 'center', color: '#555', marginBottom: 24 }}>Faça login para acessar sua conta</p>
        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail"
            type="email"
            required
            style={{ padding: 12, borderRadius: 10, border: '1px solid #ccc', fontSize: 16, marginBottom: 12 }}
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha"
            type="password"
            required
            style={{ padding: 12, borderRadius: 10, border: '1px solid #ccc', fontSize: 16, marginBottom: 12 }}
          />
          <button type="submit" style={{ padding: 12, background: '#DE562C', color: '#fff', border: 'none', borderRadius: 10, fontSize: 16, fontWeight: 600, cursor: 'pointer', marginTop: 8 }}>Entrar</button>
          {erro && <div style={{ color: 'red', marginTop: 8, textAlign: 'center' }}>{erro}</div>}
        </form>
      </SignContent>
    </SignContainer>
  );
}
