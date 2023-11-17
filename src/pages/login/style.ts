import styled from "styled-components";
export const StyledSectionLoginForm = styled.section`
  margin-left: 140px;
  display: flex;
  margin-bottom: 300px;
`;
export const StyledImage = styled.section`
  background-image: "../../assets/landscapes/img-login.svg";
`;
export const StyledMain = styled.main`
  display: flex;
  padding: 102px;
`;
export const StyledForm = styled.form`
  width: max-content;
  height: max-content;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 40px;

  /* filter: drop-shadow(2px 2px 10px gray); */

  .buttonsForm {
    display: flex;
    align-items: center;
    gap: 25px;
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

  .notCountLink {
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p {
    }
    .registerLink {
      text-decoration: none;
    }
  }
`;
