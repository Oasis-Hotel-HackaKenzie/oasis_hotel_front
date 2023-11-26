import { useState } from "react";
import { StyledSection } from "./style";

export const RoomsComponents = () => {
  const [RoomsComponents, setRoomsComponents] = useState([
    {
      room: " Oasis do Oceano",
      status: "Disponível",
      client: "Beltrano",
    },
  ]);
  return (
    <StyledSection>
      <div className="container">
        <div className="promotions">
          <p>Quartos:</p> <p>Status</p>
          <p>Cliente</p>
        </div>
        <ul>
          {RoomsComponents.map((item) => (
            <li key={item.id}>
              <p>{item.room}</p>
              <p>{item.status}</p>
              <p>{item.client}</p>
            </li>
          ))}
        </ul>
      </div>
    </StyledSection>
  );
};
