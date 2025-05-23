import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

export function SignLayout() {
  return (
    <div>
      <LayoutContainer>
        <Outlet/>
      </LayoutContainer>
    </div>
  )
}