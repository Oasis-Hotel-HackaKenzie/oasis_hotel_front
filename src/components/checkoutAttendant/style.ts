import styled from "styled-components";

export const StyledModal = styled.div`
  width: 1196px;
  height: 707px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #d9d9d9;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 74px;
  .sectionBtn {

    button {
      display: flex;
      width: 234px;
      height: 48px;
      padding: 13px 20px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 10px;
      border: 2px solid #ffdcb4;
      background: rgba(255, 220, 180, 0);
      margin-left: 48px;
    }
  }

  section {
    display: flex;
    gap: 15px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
      flex-direction: row;
      width: 710px;
      height: 60px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.9);
      justify-content: space-between;
      padding: 20px;
    }
    button {
      display: flex;
      width: 234px;
      height: 48px;
      padding: 13px 20px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      border-radius: 10px;
      border: 2px solid #ffdcb4;
      background: #ffdcb4;
    }
  }
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
  gap: 50px;
  align-items: center;
  justify-content: center;

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
