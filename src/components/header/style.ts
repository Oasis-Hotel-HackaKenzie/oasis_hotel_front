import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-primary);
  width: 100vw;
  height: 74px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-self: center;
  padding: 0 110px 0 110px;

  img {
    width: 80px;
    height: 65px;
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    justify-self: center;
    ul {
      display: flex;
      list-style: none;
      flex-direction: row;
      align-items: center;
      gap: 40px;
      li a {
        text-decoration: none;
      }
    }
    span{
      display: flex;
      text-decoration: none;
      

    }
  }
  .btnButtons{
    display: flex;
    gap: 10px;
    text-decoration: none;

  }
  /* .exemplo {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 20px;
      height: 20px;
    }
  } */
`;
