import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { SignLayout } from "./layouts/SignLayout";

import { Home } from "./pages/Home";
import { Frotas } from "./pages/Frota";
import { Motoristas } from "./pages/Motoristas";
import { Sign } from "./pages/Sign";
import { SignUp } from "./pages/SignUp";
import { Perfil } from "./pages/Perfil";
import CadastroMotorista from "./pages/SignUpMotoristas";
import CadastroVeiculo from "./pages/SignUpVeiculos";
import { BarraLateralLayout } from "./layouts/BarraLateralFrotaLayout";
import { BarraLateralMotoristaLayout } from "./layouts/BarraLateralLayoutMotoristas";
import { PainelEntradasSaidas } from "./painel";
import { PainelAbastecimentos } from "./pages/Abastecimentos";
import { PainelMultas } from "./pages/Multas";
import { PainelManutencao } from "./pages/Manutençao";
import { PainelViagens } from "./pages/Viagens"; 

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/" element={<SignLayout />}>
        <Route path="/sign" element={<Sign />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>

      <Route path="/" element={<BarraLateralLayout />}>
        <Route path="/frotas" element={<Frotas />} />
        <Route path="/cadastro-veiculo" element={<CadastroVeiculo />} />
        <Route path="/abastecimentos" element={<PainelAbastecimentos />} />
        <Route path="/multas" element={<PainelMultas />} />
        <Route path="/manutencao" element={<PainelManutencao />} />
        <Route path="/viagens" element={<PainelViagens />} />
      </Route>

      <Route path="/" element={<BarraLateralMotoristaLayout />}>
        <Route path="/motoristas" element={<Motoristas />} />
        <Route path="/cadastro-motorista" element={<CadastroMotorista />} />
        <Route path="/entradas-saidas" element={<PainelEntradasSaidas />} />
      </Route>

      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}
