import { StyledRoomDetails } from "./styles"
import pic1 from "../../assets/mock_room/de3ef2251151210c339b849bf2e45cc2.jpg"
import pic2 from "../../assets/mock_room/dfb07c6913f6d7abfa79457fab766530.jpg"
import pic3 from "../../assets/mock_room/qt3.jpg"
import pic4 from "../../assets/mock_room/qt4.jpg"
import pic5 from "../../assets/mock_room/qt5.jpg"
import pic6 from "../../assets/mock_room/qt55.jpg"
import pic7 from "../../assets/mock_room/qt555.jpg"
import userIcon from "../../assets/icons/user.png"
import air from "../../assets/icons/air-conditioner.png"
import breakfast from "../../assets/icons/breakfast.png"
import coffeeMachine from "../../assets/icons/coffee-machine.png"
import foodService from "../../assets/icons/food-service.png"
import { ReservationRoom } from "../../components/reservationRoom"

export const RoomDetailPage = () => {

    const capacity = 3
    const services = [air, breakfast, coffeeMachine, foodService]

    const renderCapacityIcons = (capacity: number) => {

        const icons = []

        for(let i = 0; i < capacity; i++) {
            icons.push(<img src={userIcon} alt="Icone de pessoa"></img>)
        }

        return icons
    }

    return(
        <StyledRoomDetails>
            <section className="sectionPhotos">
                <figure>
                    <img src={pic1} alt="" />
                </figure>
                <figure>
                    <img src={pic2} alt="" />
                </figure>
                <figure>
                    <img src={pic3} alt="" />
                </figure>
                {/* <figure>
                    <img src={pic4} alt="" />
                </figure> */}
                <figure>
                    <img src={pic5} alt="" />
                </figure>
                <figure>
                    <img src={pic6} alt="" />
                </figure>
                <figure>
                    <img src={pic7} alt="" />
                </figure>
            </section>
            <section className="infoBox">
                <div className="roomTitle">
                    <h2>Nome do quarto</h2>
                    <h3>Diárias a partir de: <span>R$ 2000,00</span></h3>
                </div>
                <div className="capacityBox">
                    <h3>Capacidade:</h3>
                    <div className="capacityIcons">
                        {
                            renderCapacityIcons(capacity)
                        }
                    </div>
                </div>
                <p>
                O quarto Oásis do Oceano é o lugar perfeito para quem busca uma experiência de luxo e exclusividade em um cenário 
                paradisíaco. Com uma vista deslumbrante para o oceano, o quarto oferece uma sensação de paz e tranquilidade.
                O quarto é espaçoso e confortável, com uma cama de casal king size, um sofá-cama, uma mesa de trabalho e uma 
                TV de 55" com canais a cabo. O banheiro é amplo e moderno, com chuveiro com aquecimento solar e amenidades Bvlgari.
                O quarto também oferece uma variedade de serviços, incluindo café da manhã incluso, serviço de quarto, transfer gratuito para a praia e Wi-Fi gratuito.
                </p>
                <div>
                    <h3>Experiência</h3>
                    <p>Imagine acordar de manhã com o som das ondas do mar e a vista do pôr do sol mais bonito da ilha. É essa experiência que o quarto Oásis do Oceano oferece aos seus hóspedes.
                        Aqui, você pode relaxar e desfrutar do conforto e da exclusividade de um quarto de luxo, com toda a privacidade que você precisa para aproveitar sua viagem.
                        Aproveite esta experiência única e inesquecível!
                    </p>    
                </div>
                <div className="servicesIcons">
                        {
                            services.map((service, i) => {
                                return <img src={service} key={i} />
                            })
                        }
                </div>
                <div className="roomTitle">
                    <h2>Reservar este quarto</h2>
                </div>
                <div className="loginText">
                    {/* <p>
                        Para reservar seu quarto é necessário realizar o login.
                    </p>
                    <p>
                        Clique <span>aqui</span> para entrar em sua conta
                    </p> */}
                   <ReservationRoom/>
                </div>
            </section>
        </ StyledRoomDetails>
    )
}