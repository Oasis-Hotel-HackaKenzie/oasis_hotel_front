import styled from "styled-components";

export const StyledModal = styled.div`
  border-radius: 10px;
  background: #d9d9d9;
  width: 1196px;
  height: 707px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    width: 710px;
    height: 60px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.9);
    gap: 65px;
  }
  .btnContinue {
    display: flex;
    width: 234px;
    height: 48px;
    padding: 13px 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: 2px solid #ffdcb4;
    background: #ffdcb4;
    margin-top: 30px;
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
  flex-direction: column;
  gap: 129px;
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
