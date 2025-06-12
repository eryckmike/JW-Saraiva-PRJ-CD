import { Route, Routes} from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { SignLayout } from "./layouts/SignLayout";
import { Navigate } from 'react-router-dom';
import { ReactNode } from "react";
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
import { PainelEntradasSaidas } from "./pages/painel";
import { PainelAbastecimentos } from "./pages/Abastecimentos";
import { PainelMultas } from "./pages/Multas";
import { PainelManutencoes } from "./pages/Manutençao";
import { PainelViagens } from "./pages/Viagens"; 


function PrivateRoute({ children }: { children: ReactNode }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/sign" replace />;
}

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><DefaultLayout /></PrivateRoute>}>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Perfil/>} />
      </Route>

      <Route path="/" element={<SignLayout />}>
        <Route path="/sign" element={<Sign onLogin={() => window.location.href = '/'} />} />
        <Route path="/signup" element={<SignUp onSuccess={() => window.location.href = '/signin'} />} />
        
      </Route>

      <Route path="/" element={<PrivateRoute><BarraLateralLayout /></PrivateRoute>}>
        <Route path="/frotas" element={<Frotas />} />
        <Route path="/cadastro-veiculo" element={<CadastroVeiculo />} />
        <Route path="/abastecimentos" element={<PainelAbastecimentos />} />
        <Route path="/multas" element={<PainelMultas />} />
        <Route path="/manutencao" element={<PainelManutencoes />} />
        <Route path="/viagens" element={<PainelViagens />} />
        <Route path="/entradas-saidas" element={<PainelEntradasSaidas />} />
      </Route>

      <Route path="/" element={<PrivateRoute><BarraLateralMotoristaLayout /></PrivateRoute>}>
        <Route path="/motoristas" element={<Motoristas />} />
        <Route path="/cadastro-motorista" element={<CadastroMotorista />} />
        
      </Route>

      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}
