import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { SignLayout } from "./layouts/SignLayout";

import { Home } from "./pages/Home";
import { Frotas } from "./pages/Frota";
import { Motoristas } from "./pages/Motoristas";
import { Sign } from "./pages/Sign";
import { SignUp } from "./pages/SignUp";
import CadastroMotorista from "./pages/SignUpMotoristas"; 

export function Router() {
  return (
    <Routes>
      {/* Layout padrão da aplicação */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="frotas" element={<Frotas />} />
        <Route path="motoristas" element={<Motoristas />} />
        <Route path="cadastro" element={<CadastroMotorista />} /> 
      </Route>

      <Route path="/" element={<SignLayout />}>
        <Route path="sign" element={<Sign />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
