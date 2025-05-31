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

export function Router() {
  return (
    <Routes>
        <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/frotas" element={<Frotas />} />
            <Route path="/motoristas" element={<Motoristas />} />
            <Route path="/cadastro-veiculo" element={<CadastroVeiculo />} />
            <Route path="/cadastro-motorista" element={<CadastroMotorista />} /> {/* ✅ atualizado */}
        </Route>
        <Route path="/" element={<SignLayout />}>
            <Route path="/sign" element={<Sign />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/perfil" element={<Perfil />} />
        </Route>
    </Routes>
  );
}
