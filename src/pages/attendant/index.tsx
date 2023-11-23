import { StyledMain, StyledSection, StyledSectionService } from "./style";
import arrow from "../../assets/icons/right-arrow 1.svg";

export const PageAttendant = () => {
  return (
    <StyledMain>
      <StyledSectionService>
        <div>
          <ul>
            <li>
              Cadastrar cliente
              <img src={arrow} alt="arrow-right" />{" "}
            </li>
            <li>
              Promoções
              <img src={arrow} alt="arrow-right" />
            </li>
            <li>
              Quartos
              <img src={arrow} alt="arrow-right" />
            </li>
            <li>
              Check-in
              <img src={arrow} alt="arrow-right" />
            </li>
            <li>
              Check-out
              <img src={arrow} alt="arrow-right" />
            </li>
          </ul>
        </div>
      </StyledSectionService>
      <StyledSection>
        <div>
            

        </div>
      </StyledSection>
    </StyledMain>
  );
};
