import { StyledHeader } from "./style";
import logo from "../../assets/logo/oasis-hotel-logo.png";
// import arrowDown from'../../assets/icons/down (1).png'
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="oasis-hotel" />
      <nav>
        <ul>
          <li>
            <a href="#">Quartos</a>
          </li>
          <li>
            <a href="#aboutus">Gastronomia</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
        </ul>
      </nav>
      {/* <div className="exemplo">Olá, minha conta<img src={arrowDown} alt="arrowDown" />
            </div> */}

      <div className="btnButtons">
        <Link to="/login">
          <span>Login</span>
        </Link>
        <Link to="/register">
          <span>Registro</span>
        </Link>
      </div>
    </StyledHeader>
  );
};
