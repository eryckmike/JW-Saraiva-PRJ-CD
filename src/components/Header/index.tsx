import { Link, NavLink } from "react-router-dom";
import { HeaderConteiner, LogoWrapper, NavMenu, UserProfile, Divider, BarraLateral } from "./styles";
import Logo from "../../assets/Logo.png";

export function Header() {
  return (
    <>
      <HeaderConteiner>
        <LogoWrapper>
          <Link to="/">
            <img src={Logo} alt="Logo JW Saraiva" />
          </Link>
        </LogoWrapper>

        <NavMenu>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Página Inicial
          </NavLink>
          <NavLink 
            to="/frotas" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Frota
          </NavLink>
          <NavLink 
            to="/motoristas" 
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Motoristas
          </NavLink>
        </NavMenu>

        <UserProfile>
          <img src={Logo} alt="Foto de perfil do usuário" />
        </UserProfile>
      </HeaderConteiner>
      
      <Divider />
    </>
  );
}

export function BarraLateralFrota() {
  return (
    <BarraLateral>
                    <ul>
                      <li>
                      <NavLink to="/frotas" className={({ isActive }) => isActive ? "active" : ""}>
                        Veículos
                      </NavLink>
                      </li>
                      <li>Frotas</li>
                      <li>Viagens</li>
                      <li>Entradas/Saídas</li>
                      <li>Entradas/Saídas/CT's</li>
                      <li>Manutenções</li>
                      <li>Abastecimentos</li>
                      <li>Multas</li>
                      <li>
                      <NavLink to="/cadastro-veiculo" className={({ isActive }) => isActive ? "active" : ""}>
                        Cadastrar
                      </NavLink>
                      </li>
                    </ul>
    </BarraLateral>

  )
}

export function BarraLateralMotorista() {
  return (
    <BarraLateral>
      <ul>

        <li>
          <NavLink to="/motoristas" className={({ isActive }) => isActive ? "active" : ""}>
            Motoristas
          </NavLink>
        </li>
        <li>Viagens</li>
        <li>Entradas/Saídas</li>
        <li>Entradas/Saídas/CT's</li>
        <li>Manutenções</li>
        <li>Abastecimentos</li>
        <li>Multas</li>
        <li>
          <NavLink to="/cadastro-motorista" className={({ isActive }) => isActive ? "active" : ""}>
          Cadastras
          </NavLink>
          </li>
      </ul>
    </BarraLateral>
  )
}