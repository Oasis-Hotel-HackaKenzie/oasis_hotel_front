import { StyledFooter } from "./styles"
import reserveIcon from "../../assets/icons/reserva-icon.png"
import pin from "../../assets/social/pin.png"
import logo from "../../assets/logo/oasis-hotel-logo.png"
import faceIcon from "../../assets/social/facebook.png"
import instaIcon from "../../assets/social/instagram.png"
import whatsIcon from "../../assets/social/whatsapp.png"

export const Footer = () => {
    return (
        <StyledFooter>
            <ul>
                <li>Quartos</li>
                <li>Gastronomia</li>
                <li>Serviços</li>
                <li>Minha conta</li>
            </ul>
            <div>
                <img src={reserveIcon} alt="Icone de reservas" className="reserveIcon" />
                <p>Central de reservas: 0800 7777-5555</p>
            </div>
            <div>
                <img src={pin} alt="Icone de localização" className="pinIcon" />
                <p>OASIS HOTEL, Ilhas Maldivas Rua Lorem Ipsum, 1900</p>
            </div>
            <figure>
                <img src={logo} alt="Oasis Hotel logo" />
            </figure>
            <div className="social">
                <img src={faceIcon} alt="Icone Facebook" />
                <img src={instaIcon} alt="Icone Instagram" />
                <img src={whatsIcon} alt="Icone WhatsApp" />
            </div>
        </StyledFooter>
    )
}