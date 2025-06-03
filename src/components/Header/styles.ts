import styled from 'styled-components';

export const HeaderConteiner = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #E8EBED; /* Cinza claro */
  padding: 20px 40px;
  font-family: 'Poppins', sans-serif;
`;

export const LogoWrapper = styled.div`
  img {
    height: 50px;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 30px;

  a {
    color: #7A8A96;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    transition: color 0.3s, border-bottom 0.3s;

    &.active {
      color: #DE562C;
      border-bottom: 2px solid #DE562C;
      padding-bottom: 2px;
    }

    &:hover {
      color: #DE562C;
    }
  }
`;

export const UserProfile = styled.div`
  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 2px solid #7A8A96;
    transition: border-color 0.3s;

    &:hover {
      border-color: #DE562C;
    }
  }
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: #7A8A96; /* Cor intermediária para dividir */
  margin: 0;
`;

export const BarraLateral = styled.div`
  width: 250px;
  background: #161b22;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

    li {
      margin-bottom: 20px;
      cursor: pointer;
      font-weight: 600;
      color: #7A8A96;
      font-size: 16px;
      letter-spacing: 0.5px;
      transition: color 0.3s, transform 0.3s;

      &:hover {
        color: #DE562C;
        transform: translateX(25px);
      }

      a {
        text-decoration: none;
        }

      a.active {
        color: #DE562C!important;
        font-weight: bold;
      }

      
      a:visited {
        text-decoration: none;
        color: #7A8A96; /* mesma cor base dos textos da barra */
      }

        
    }
  
`;