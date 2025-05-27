import React from "react";
import { MotoristasConteiner, BarraLateral, PainelMotoristas, BarraPesquisa, GradeMotoristas, CartaoMotorista } from "./styles";

export function Motoristas() {
    const motoristas = [
        { id: 1, nome: "Nicole Bahls", categoria: "A" },
        { id: 2, nome: "João Pedro", categoria: "D" },
    ];

    return (
        <MotoristasConteiner>
            <BarraLateral>
                <ul>
                    <li>Motoristas</li>
                    <li>Viagens</li>
                    <li>Entradas / Saídas</li>
                    <li>Cadastrar Motorista</li>
                </ul>
            </BarraLateral>

            <PainelMotoristas>
                <BarraPesquisa>
                    <input type="text" placeholder="Nome / Código do Motorista" />
                </BarraPesquisa>

                <GradeMotoristas>
                    {motoristas.map((m) => (
                        <CartaoMotorista key={m.id}>
                            <p>{m.nome}</p>
                            <p>Categoria: {m.categoria}</p>
                        </CartaoMotorista>
                    ))}
                </GradeMotoristas>
            </PainelMotoristas>
        </MotoristasConteiner>
    );
}
