import { useState } from "react";
import { StyledSection } from "./style";

export const Promotion = () => {
  const [promotion, setPromotion] = useState([
    {
      promo: "Promoção 1",
      dateStart: "2023-12-25",
      dateFinished: "2023-12-31",
    },
  ]);
  return (
    <StyledSection>
      <div className="container">
        <div className="promotions">
          <p>Promoção:</p> <p>Data início</p>
          <p>Data saída</p>
        </div>
        <ul>
          {promotion.map((item) => (
            <li key={item.id}>
              <p>{item.promo}</p>
              <p>{item.dateStart}</p>
              <p>{item.dateFinished}</p>
            </li>
          ))}
        </ul>
      </div>
    </StyledSection>
  );
};
