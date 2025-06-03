import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { BarraLateralMotorista } from "../../components/Header";
import { Header } from "../../components/Header/index.tsx";

export function BarraLateralMotoristaLayout() {
  return (
    <>
      <div>
        <Header/>
      </div>
      <LayoutContainer>
        <BarraLateralMotorista/>
        <Outlet/>
      </LayoutContainer>
    </>
  )
}