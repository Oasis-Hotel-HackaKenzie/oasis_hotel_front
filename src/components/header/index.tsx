import { StyledHeader } from "./style"
import logo from'../../assets/logo/oasis-hotel-logo.png'
import arrowDown from'../../assets/icons/down (1).png'


export const Header = () => {
    return(
        <StyledHeader>
        <img src={logo} alt="oasis-hotel" />

        <nav>
            <ul>
                <li><a href="#">Quartos</a></li>
                <li><a href="#aboutus">Gastronomia</a></li>
                <li><a href="#services">Serviços</a></li>
            </ul>
          
        </nav>
        <div className="exemplo">Olá, Antõnio <img src={arrowDown} alt="arrowDown" />
            
            </div>
        </StyledHeader>
    )

}