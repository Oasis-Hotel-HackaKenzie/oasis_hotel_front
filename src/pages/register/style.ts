import styled from "styled-components";

export const StyledSectionRegister = styled.section``;
export const StyledSectionImage = styled.section`
  img {
    width: 467px;
    height: 700px;
  }
`;

export const StyledForm = styled.form`
  width: max-content;
  height: max-content;
  border-radius: 4px;
  background-color: ;
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin-bottom: 20px;
  /* filter: drop-shadow(2px 2px 10px gray); */
  gap: 6px;

  .buttonsForm {
    display: flex;
    align-items: center;
    gap: 20px;
    .btnContinue {
      background-color: var(--color-primary);
      border-radius: 10px;
      border: 2px solid #ffdcb4;
      display: flex;
      width: 150px;
      height: 48px;
      padding: 13px 20px;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    .btnBack {
      background-color: var(--color-grey-01);
      border: 2px solid var(--color-primary);
      display: flex;
      width: 150px;
      height: 48px;
      padding: 13px 20px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 10px;
    }
  }
`;
