import { FormGroup, Input, LoginConteiner, SignConteiner, TelaLogin, UserInfoLabel } from "./styles";
import Logo from "../../assets/Logo.png";
export function Sign(){
    return(
        <SignConteiner>
            <TelaLogin>
                <img src={Logo} alt="Logo JW Saraiva" />
            </TelaLogin>
            <LoginConteiner>
                <FormGroup>
                    <UserInfoLabel htmlFor="username">Digite seu usuário ou e-mail: </UserInfoLabel>
                    <Input id="username" type="text" />
                </FormGroup>
                <FormGroup>
                    <UserInfoLabel htmlFor="password">Digite sua senha:</UserInfoLabel>
                    <Input id="password" type="password" />
                </FormGroup>

            </LoginConteiner>
        </SignConteiner>
    )
}