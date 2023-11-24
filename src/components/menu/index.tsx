import {  StyledSectionService } from "./style";
import arrow from "../../assets/icons/right-arrow 1.svg";
import { useEffect, useState } from "react";

export const Menu = () => {
  const [role, setRole] = useState("");

  // Obtém a role do usuário logado
  const getUserRole = async () => {
    const response = await fetch("/api/users/me");
    const data = await response.json();
    setRole(data.role);
  };

  // Inicializa o estado com a role padrão
  useEffect(() => {
    getUserRole();
  }, []);

  // Lista de li para hóspedes
  const guestItems = [
    <li key="home">Meu perfil</li>,
    <li key="rooms">Minhas reservas</li>,
  ];

  // Lista de li para atendentes
  const attendantItems = [
    <li key="home">Cadastrar cliente</li>,
    <li key="rooms">Promoções</li>,
    <li key="reservations">Quartos</li>,
    <li key="checkin">Check-in</li>,
    <li key="checkout">Check-out</li>,
  ];

  // Lista de li para gerentes
  const managerItems = [
    <li key="register">Cadastrar funcionário</li>,
    <li key="rooms">Promoções</li>,
    <li key="reservations">Quartos</li>,
    <li key="checkin">Check-in</li>,
    <li key="checkout">Check-out</li>,
   
  ];

  // Lista de li a serem renderizadas
  const items = role === "guest" ? guestItems : role === "attendant" ? attendantItems : managerItems;

  

  return (

      <StyledSectionService>
        <div>
          {/* <ul>
            <li>
              Cadastrar cliente
              <img src={arrow} alt="arrow-right" />{" "}
            </li>
          
          </ul> */}
           <ul>
      {items.map((item) => (
        <li key={item.key}>{item} <img src={arrow} alt="arrow-right" /></li>
      ))}
    </ul>
        </div>
      </StyledSectionService>
 
  );
};
