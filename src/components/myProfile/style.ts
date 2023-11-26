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
    flex-direction: row;
    border-radius: 10px;
    background: rgba(255, 220, 180, 0.8);
    box-shadow: 2px 5px 4px 2px rgba(0, 0, 0, 0.25);
    width: 710px;
    flex-wrap: wrap;
    height: 574px;
    flex-shrink: 0;
    padding: 20px;
    align-items: center;
    justify-content: center;

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      li {
        width: 200px;
      }
      p {
        color: black;
      }
      span {
        color: #868e96;
      }
    }
    button {
      display: flex;
      width: 150px;
      height: 48px;
      padding: 13px 20px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      border-radius: 10px;
      border: 2px solid #ffdcb4;
      background: #019992;
    }
  }
`;
