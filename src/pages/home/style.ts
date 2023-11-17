import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;

export const StyledSectionImage = styled.section`
  height: max-content;
  img {
    width: 1440px;
    height: max-content;
  }
`;

export const StyledSectionFindHotel = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  h2 {
    color: var(--color-grey-04);
    font-family: Poppins;
    font-size: 38px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .explore-hotel {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 60px;

    .model1 {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        max-width: 350px;
        padding: 10px;
        text-align: justify;
      }
    }
    .model2 {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        max-width: 350px;
        padding: 10px;
        text-align: justify;
      }
    }
    .model3 {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        max-width: 350px;
        padding: 10px;
        text-align: justify;
      }
    }
  }
`;

export const StyledSectionExperienceGastronomic = styled.section`
 display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  h2 {
    color: var(--color-grey-04);
    font-family: Poppins;
    font-size: 38px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .card-gastronomic-one{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    img{
      width: 598px;
      height: 398px;
    }
    p{
      width: 568px;
      text-align: justify;

    }

  }
  .card-gastronomic-two{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    img{
      width: 598px;
      height: 398px;
    }
    p{
      width: 568px;
      text-align: justify;

    }

  }
`;
