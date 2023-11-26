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
.dates{
    

}
  .container {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: rgba(255, 220, 180, 0.8);
    box-shadow: 2px 5px 4px 2px rgba(0, 0, 0, 0.25);
    width: 710px;
    flex-wrap: wrap;
    height: 574px;
    flex-shrink: 0;
    padding: 20px;
    
    .promotions{
        display: flex;
        height: min-content;
        gap: 20%;
        flex-direction: row;
        justify-content: space-between;

        p{
            color: black;
        }
    }
   

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      display: flex;
      border: 2px solid #FFD4A2CC;
      

      li {
        
        flex: 1 0 50%;
        display: flex;
        justify-content: space-between;
        &:hover {
          background-color:#FFD4A2;
          color: #019992;
        }
        &:nth-child(n + 4) {
          width: 100%;
          flex: 1 0 100%;
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
  }
`;
