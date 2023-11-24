
import styled from "styled-components";

export const StyledSectionService = styled.section`
  margin-bottom: 250px;
  div {
    border-radius: 10px;
    background: rgba(255, 220, 180, 0.8);
    box-shadow: 2px 5px 4px 2px rgba(0, 0, 0, 0.25);
    width: 345px;
    height: 329px;
    flex-shrink: 0;
    padding: 50px;
    ul {
      display: flex;
      align-items: start;
      flex-direction: column;
      justify-content: center;
      gap: 30px;

      li {
        display: flex;
        justify-content: center;
        gap: 100px;
        align-items: center;
        width: max-content;
        &:hover {
          color: var(--color-secondary);
        }
      }
    }
  }
`;

export const StyledMain = styled.main`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

`;


export const StyledSection = styled.section`
  div {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: rgba(255, 220, 180, 0.8);
    box-shadow: 2px 5px 4px 2px rgba(0, 0, 0, 0.25);
    width: 710px;
    height: 574px;
    flex-shrink: 0;
    padding: 20px;

    ul {
      border: 5px solid #ffd4a2;
      border-radius: 12px;
      width: 200px;
      height: 200px;
      padding: 20px;
      li {
        &:hover {
          background-color:  #FFDCB4;
          color: var(--color-secondary);
        }
      }
    }
  }
`;
