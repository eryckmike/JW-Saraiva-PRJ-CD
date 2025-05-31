import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { BarraLateralFrota } from "../../components/Header";
import { Header } from "../../components/Header/index.tsx";

export function BarraLateralLayout() {
  return (
    <>
      <div>
        <Header/>
      </div>
      <LayoutContainer>
        <BarraLateralFrota/>
        <Outlet/>
      </LayoutContainer>
    </>
  )
}