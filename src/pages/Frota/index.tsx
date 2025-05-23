import { FrotasConteiner, BarraLateral, VeiculosPainel, BarraPesquisa, GradeVeiculos, CartaoVeiculo } from "./styles";


export function Frotas(){


    //simular frota para cards
    const veiculos = [
        { id: 1, placa: "ABC-1234", modelo: "Onix" },
        { id: 2, placa: "XYZ-5678", modelo: "Corolla" },
      ];

    return(

    <FrotasConteiner>
        <BarraLateral>
            <ul>
                <li>Veículos</li>
                <li>Viagens</li>
                <li>Entradas/Saídas</li>
                <li>Entradas/Saídas/CT's</li>
                <li>Manutenções</li>
                <li>Abastecimentos</li>
                <li>Multas</li>
                <li>Cadastras</li>
            </ul>
        </BarraLateral>

        <VeiculosPainel>
            <BarraPesquisa>
                <input type="text" placeholder="Placa / Cod. Veículo" />
            </BarraPesquisa>

            <GradeVeiculos>
                    {veiculos.map((v) => (
                        <CartaoVeiculo key ={v.id}>
                            <p>{v.placa}</p>
                            <p>{v.modelo}</p>
                        </CartaoVeiculo>
                    ))}
            </GradeVeiculos>

        </VeiculosPainel>
    </FrotasConteiner>
    )
}