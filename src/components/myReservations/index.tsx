import React, { useState } from "react";
import { StyledSection } from "./style";

export const MyReservation = () => {
  const [reservation, setReservation] = useState([
    {
      name: "Fulano da Silva",
      departureDate: "2023-12-25",
      arrivalDate: "2023-12-31",
    },
  ]);

  return (
    <StyledSection>
      <div>
        <ul>
          {reservation.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>{item.departureDate}</p>
              <p>{item.arrivalDate}</p>
            </li>
          ))}
        </ul>
      </div>
    </StyledSection>
  );
};