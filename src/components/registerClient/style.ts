import styled from "styled-components";

export const StyledModal = styled.div`
  width: 1196px;
  height: 707px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #d9d9d9;
  display: flex;
align-items: center;
flex-direction: column;
padding:74px ;
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
`;
export const StyledForm = styled.form`
  width: 700px;
  flex-wrap: wrap;
  height: max-content;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 30px;
  margin-right: 60px;
  gap: 20px;

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
