import styled from "styled-components";

export const PerfilContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f5f5 60%, #e8ebed 100%);
  padding: 2rem 1rem;
`;

export const PerfilInfoContainer = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 6px 32px rgba(0,0,0,0.10), 0 1.5px 6px #e8ebed;
  padding: 2.5rem 2rem 2rem 2rem;
  max-width: 410px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1.5px solid #e8ebed;
  transition: box-shadow 0.2s, border-color 0.2s;

  &:hover {
    box-shadow: 0 12px 40px rgba(222,86,44,0.10), 0 2px 8px #e8ebed;
    border-color: #DE562C;
  }

  @media (max-width: 600px) {
    padding: 1.5rem 0.5rem;
    max-width: 98vw;
  }
`;

export const FormPerfil = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FotoPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;

  img {
    width: 112px;
    height: 112px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #788793;
    margin-bottom: 0.5rem;
    background: #e8ebed;
    box-shadow: 0 2px 8px #e8ebed;
    transition: border-color 0.2s;
  }
  .foto-label {
    color: #DE562C;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s;
    &:hover {
      color: #bf4523;
      text-decoration: underline;
    }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Label = styled.label`
  color: #222;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.01em;
`;

export const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1.5px solid #E8EBED;
  border-radius: 7px;
  font-size: 1.05rem;
  background: #f8f8f8;
  color: #222;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-shadow: 0 1px 2px #e8ebed44;
  &:focus {
    outline: none;
    border-color: #DE562C;
    box-shadow: 0 0 0 2px #de562c22;
  }
`;

export const SaveButton = styled.button`
  background: linear-gradient(90deg, #DE562C 60%, #e8ebed 100%);
  color: #fff;
  border: none;
  border-radius: 7px;
  padding: 0.95rem 0;
  font-size: 1.13rem;
  font-weight: 700;
  margin-top: 0.7rem;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px #de562c22;
  letter-spacing: 0.01em;
  &:hover {
    background: linear-gradient(90deg, #bf4523 60%, #e8ebed 100%);
    box-shadow: 0 4px 16px #de562c33;
  }
`;

// Responsividade para o container externo
export const ResponsivePerfilContainer = styled(PerfilContainer)`
  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

