import { HeaderContainer } from "./HeaderContainer";
import logoSirros from "../assets/logo-sirros.png";

export function Header(){
    return(
        <HeaderContainer>
            <img src={ logoSirros } alt="" />
        </HeaderContainer>
    )
}