import styled from "styled-components";

export const StyledContainerInput = styled.div`
  width: 325px;
  height: 100px;
  max-width: 90%;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;

  p {
    color: #F0914F;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
  }

  label {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 48px;
    top: 25px;
    padding: 0px 16px 0px 16px;
    border-radius: 4px;
    background-color: var(--color-grey-05);
    border: 1.5px solid var(--grey--scale--grey-7);
    border-radius: 15px;

    &:hover {
      border: 1.5px solid var(--color-grey-04);
    }
  }
`;

export const StyledTextField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    color: var(--grey-100, #212529);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 183.333% */
  }

  input {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    width: 400px;
  }
`;
