import {
  MotoristasContainer,
  PainelMotoristas,
  BarraPesquisa,
  GradeMotoristas,
  CartaoMotorista,
  AcoesIcones
} from "./styles";
import { Pencil, Trash2 } from "lucide-react";

export function Motoristas() {
  const motoristas = [
    { id: 1, nome: "Nicole Bahls", categoria: "A" },
    { id: 2, nome: "João Pedro", categoria: "D" },
    { id: 3, nome: "Maria Clara", categoria: "B" },
    { id: 4, nome: "Carlos Silva", categoria: "C" },
    { id: 5, nome: "Fernanda Souza", categoria: "E" },
    { id: 6, nome: "José Raimundo", categoria: "D" },
  ];

  return (
    <MotoristasContainer>
      <PainelMotoristas>
        <BarraPesquisa>
          <input type="text" placeholder="Nome / Cod. Motorista" />
        </BarraPesquisa>
        <GradeMotoristas>
          {motoristas.map((m) => (
            <CartaoMotorista key={m.id}>
              <AcoesIcones>
                <Pencil size={18} color="#E8EBED" onClick={() => console.log("Editar", m.id)} />
                <Trash2 size={18} color="#DE562C" onClick={() => console.log("Excluir", m.id)} />
              </AcoesIcones>
              <p>{m.nome}</p>
              <p>Categoria {m.categoria}</p>
            </CartaoMotorista>
          ))}
        </GradeMotoristas>
      </PainelMotoristas>
    </MotoristasContainer>
  );
}
