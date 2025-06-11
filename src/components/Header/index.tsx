import { Link, NavLink, useNavigate } from "react-router-dom";
import { HeaderConteiner, LogoWrapper, NavMenu, UserProfile, ProfileDropdown, DropdownItem, Divider, BarraLateral } from "./styles";
import Logo from "../../assets/Logo.png";
import { useState, useRef, useEffect } from 'react';

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Clear any stored user data
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    // Redirect to login page
    navigate('/sign');
  };

  const handlePerfil = () => {
    navigate('/perfil');
    setIsDropdownOpen(false);
  };

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

        <UserProfile ref={dropdownRef}>
          <img 
            src={Logo} 
            alt="Foto de perfil do usuário" 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          {isDropdownOpen && (
            <ProfileDropdown>
              <DropdownItem onClick={handlePerfil}>
                Perfil
              </DropdownItem>
              <DropdownItem onClick={handleLogout}>
                Sair
              </DropdownItem>
            </ProfileDropdown>
          )}
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
                      <li>
            <NavLink to="/Viagens" className={({ isActive }) => isActive ? "active" : ""}> Viagens </NavLink> </li>
                      <li>
            <NavLink to="/entradas-saidas" className={({ isActive }) => isActive ? "active" : ""}> Entradas/Saídas </NavLink> </li>
                     <li>
                      <NavLink to="/manutencao" className={({ isActive }) => isActive ? "active" : ""}>
                        Manutenções
                      </NavLink>
                      </li>
                      <li><NavLink to="/Abastecimentos" className={({ isActive }) => isActive ? "active" : ""}>
                        Abastecimentos
                      </NavLink></li>
                      <li><NavLink to="/Multas" className={({ isActive }) => isActive ? "active" : ""}>
                        Multas
                      </NavLink></li>
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
        <li>
          <NavLink to="/cadastro-motorista" className={({ isActive }) => isActive ? "active" : ""}>
          Cadastrar
          </NavLink>
          </li>
      </ul>
    </BarraLateral>
  )
}