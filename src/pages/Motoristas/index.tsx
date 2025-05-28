import {
    MotoristasContainer,
    BarraLateral,
    PainelMotoristas,
    BarraPesquisa,
    GradeMotoristas,
    CartaoMotorista,
  } from "./styles";
  
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
        <BarraLateral>
          <ul>
            <li>Motoristas</li>
            <li>Viagens</li>
            <li>Entradas/Saídas</li>
            <li>Cadastrar</li>
          </ul>
        </BarraLateral>
  
        <PainelMotoristas>
          <BarraPesquisa>
            <input type="text" placeholder="Nome / Cod. Motorista" />
          </BarraPesquisa>
  
          <GradeMotoristas>
            {motoristas.map((m) => (
              <CartaoMotorista key={m.id}>
                <p>{m.nome}</p>
                <p>Categoria {m.categoria}</p>
              </CartaoMotorista>
            ))}
          </GradeMotoristas>
        </PainelMotoristas>
      </MotoristasContainer>
    );
  }
  