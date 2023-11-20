import styled from "styled-components";

export const StyledForm = styled.form`
  .btnReservation {
    border-radius: 10px;
    border: 2px solid #ffdcb4;
    background: #ffdcb4;
    display: flex;
    width: 323px;
    height: 48px;
    padding: 13px 20px;
    justify-content: center;
    gap: 10px;
    flex-shrink: 0;
  }
`;
export const StyledReservation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .pay {
    padding: 20px;
    gap: 45px;
    display: flex;
    .organization{
      gap: 70px;
    }
    div {
      width: 309px;
      display: flex;
      justify-content: flex-start;
      padding-left: 10px;
      flex-direction: column;

      .total {
        width: 339px;
        height: 60px;
        border-radius: 10px;
        background: rgba(217, 217, 217, 0.5);
        color: #000;
        font-family: Poppins;
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        align-items: start;
        justify-content: center;
      }
      .icons {
        flex-direction: column;
        .images {
          display: flex;
          width: 50px;
          height: 50px;
          flex-direction: row;
          gap: 20px;
          margin-bottom: 25px;
        }
        p {
          width: 457px;
          height: 19px;
          color: #000;
          font-family: Poppins;
          font-size: 12px;
          font-style: normal;
          font-weight: 300;
          line-height: normal;
        }
      }
    }
  }
`;
