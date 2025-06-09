import React, { ReactNode, useEffect } from 'react';
import { Overlay, Content, CloseButton } from './styles';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  // Fecha o modal ao apertar ESC
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Content onClick={e => e.stopPropagation()}>
        <CloseButton aria-label="Fechar" onClick={onClose}>
          <X size={20} />
        </CloseButton>
        {children}
      </Content>
    </Overlay>
  );
}
