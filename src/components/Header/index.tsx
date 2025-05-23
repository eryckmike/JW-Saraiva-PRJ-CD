import { HeaderConteiner, Divider, UserProfile, LogoWrapper, NavMenu } from "./styles"
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

export function Header() {
  return(
    <>
    <HeaderConteiner>
      <LogoWrapper>
        <Link to="/">
        <img src={Logo} alt="Logo JW Saraiva" />
        </Link>
      </LogoWrapper>
      <NavMenu>
        <NavLink to="/"  className={({ isActive }) => isActive ? "active" : ""}>Pagina Inicial</NavLink>
        <NavLink to="/frotas"  className={({ isActive }) => isActive ? "active" : ""}>Frota</NavLink>
        <NavLink to="/motoristas"  className={({ isActive }) => isActive ? "active" : ""}>Motoristas</NavLink>
      </NavMenu>
      <UserProfile>
      <img src={Logo} alt="Foto perfil do Usuario" />
      </UserProfile>
    </HeaderConteiner>
    <Divider/>
    </>
  );
}
