import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;        /* garante que fique acima de tudo */
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem; right: 0.5rem;
  background: transparent;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
`;
