import styled from "styled-components";

export const StyledModal = styled.div`
  border-radius: 10px;
  background: rgba(255, 220, 180, 0.8);
  box-shadow: 2px 5px 4px 2px rgba(0, 0, 0, 0.25);
  width: 710px;
  height: 512px;
  flex-shrink: 0;
`;

export const StyledSectionRegister = styled.section``;
export const StyledSectionImage = styled.section`
  background-image: "../../assets/landscapes/img-register.svg";
`;
export const StyledMain = styled.main`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  flex-direction: column;
`;
export const StyledForm = styled.form`
  display: flex;
  width: 700px;
  flex-direction: column;
  flex-wrap: wrap;
  height: max-content;
  border-radius: 4px;
 margin: 0 auto;
 align-items: center;
 justify-content: center;
 padding: 30px;
 margin-top: 30px;
  gap: 20px;

  .buttonsForm {
    display: flex;
    align-items: center;
    gap: 20px;
    .btnContinue {
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
